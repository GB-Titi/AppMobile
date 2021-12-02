import { IonBackButton, IonButtons, IonCol, IonContent, IonHeader, IonNote, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import "./index.css";

const Pokedex = () => {
    return (
        <IonPage id="PokedexPage">
            <IonHeader class="ion-justify-content-start">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                        <IonTitle>Pokédex</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonNote>Ceci est la page pokedex</IonNote>
            </IonContent>
        </IonPage>
    );
}

export default Pokedex;