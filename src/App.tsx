import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/listTopTheme.css";
import { CreateTop, Home, ViewTop, Connection } from "./pages";
import { Menu } from "./components";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useHistory } from 'react-router-dom';
import { App as AppCapacitor, URLOpenListenerEvent } from '@capacitor/app';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAhEAf9IGpZsnhUTuHfjZvqRwPWcEAwq_Q",
  authDomain: "pokeionic.firebaseapp.com",
  projectId: "pokeionic",
  storageBucket: "pokeionic.appspot.com",
  messagingSenderId: "709752212918",
  appId: "1:709752212918:web:596d3f395871e728824517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App: React.FC = () => {
  let history = useHistory();
  useEffect(() => {
    AppCapacitor.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      // Example url: https://beerswift.app/tabs/tab2
      // slug = /tabs/tab2
      const slug = event.url.split('.app').pop();
      if (slug) {
        history.push(slug);
      }
      // If no match, do nothing - let regular routing
      // logic take over
    });
  }, []);

  const [user, setuser] = useState<any>(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setuser(user);
    });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          {user === null && (
            <IonRouterOutlet id="main">
              <Route path="/" component={Connection} />
            </IonRouterOutlet>
          )}
          {user !== null && (
            <IonRouterOutlet id="main">
              <Route path="/" exact={true} component={Home} />
              <Route path="/create" exact={true} component={CreateTop} />
              <Route path="/view/:title" exact={true} component={ViewTop} />
            </IonRouterOutlet>
          )}
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
