import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "@firebase/auth";
import { getAuth, signInWithRedirect, signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const provider = new GoogleAuthProvider();

const useConnection = () => {
    const connectWithGoogle = () => {
        const auth = getAuth();
        signInWithRedirect(auth, provider);
    };

    const deconnection = () => {
        const auth = getAuth();
        signOut(auth);
    }

    const connection = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);

                if (errorMessage.includes("auth/user-not-found")) {
                    console.log('utilisateur non connu');
                    createUserWithEmailAndPassword(auth, email, password).then(
                        (response) => {
                            const {email:emailResponse, uid} = response.user
                            const db = getFirestore();
                            // Add a new document with a generated id.
                            addDoc(collection(db, "users"), {
                                email: emailResponse,
                                uid,
                            });
                        })
                }
                // ..
            })
    }


    return {
        connectWithGoogle,
        deconnection,
        connection,
    };
};

export default useConnection;