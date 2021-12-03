import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonInfiniteScroll, IonNote, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import "./index.css";
import { useApi } from "../../hooks";

const Pokedex = () => {
    const { pokemon } = useApi();
    // console.log(pokemon.map((pokemons: any) => console.log(pokemons.info.abilities)));
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
                <IonInfiniteScroll>
                    {pokemon.map((pokemons: any) => (
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>
                                    {pokemons.info.id} - {pokemons.info.name}
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>Expérience de base : {pokemons.info.base_experience}</IonCardContent>
                        </IonCard>
                    ))}
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
}

export default Pokedex;