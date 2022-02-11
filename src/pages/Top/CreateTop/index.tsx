import React from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { TopForm } from "../../../components";
import { useTopList } from "../../../hooks";
import { RouteComponentProps } from "react-router";
import { Top } from "../../../types";
import './index.css' 
const CreateTop = ({ history }: RouteComponentProps) => {
  const { pushTop } = useTopList();

  const handleSubmit = (top: Top) => {
    console.log(top);
    
    pushTop(top);
    history.replace("/");
    window.history.forward();
    // window.location.reload();

  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Création d'une équipe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <TopForm onSubmit={handleSubmit} />
      </IonContent>
    </IonPage>
  );
};

export default CreateTop;
