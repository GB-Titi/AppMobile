import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { saveOutline, lockOpenOutline, mailOutline } from "ionicons/icons";
import React, { useState } from "react";
import { useConnection } from "../../hooks";

const Connection = () => {
    const { connection } = useConnection();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Connexion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Email</IonLabel>
                                <IonIcon icon={mailOutline} slot="mailOutline" />
                                <IonInput
                                    value={email} placeholder="email" onIonChange={(e) => setEmail(e.detail.value!)}
                                ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position="floating">Mot de passe</IonLabel>
                                <IonIcon icon={lockOpenOutline} slot="lockOpenOutline" />
                                <IonInput
                                    value={password} placeholder="password" onIonChange={(e) => setPassword(e.detail.value!)}
                                ></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton
                                shape="round"
                                expand="full"
                                color="primary"
                            onClick={() => connection(email, password)}
                            >
                                Connexion classique
                                <IonIcon slot="end" icon={saveOutline} />
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}

export default Connection;