import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonInfiniteScroll, IonNote, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./index.css";
import { useApi } from "../../hooks";

const Pokedex = () => {
    const { pokemon } = useApi();
    useEffect(() => {
      if(pokemon.length > 0){
        // console.log("🚀 ~ file: index.tsx ~ line 10 ~ useEffect ~ pokemon", pokemon.map((pokemons: any) => ({
        //     types: pokemons.info.types.map((t: any) => t.type.name)
        // })))
        console.log("test:", pokemon.map((pokemons: any) =>pokemons.info.types.map((t: any/*, i: number*/) => t.type.name)))
      }
    }, [pokemon])
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
                    {pokemon.map((pokemons: any, index: number) => (
                        /* lister : 
                            - Nom ->  {pokemons.info.name}
                            - # Numéro -> {pokemons.info.id}
                            - Image ->  {pokemons.info.sprites.front_default}
                            - Description ->  {pokemons.info.flavor_text_entries[0].flavor_text}
                            - Taille -> {pokemons.info.height} / {pokemons.info.width}
                            - Poid -> {pokemons.info.weight}
                            - Types -> {pokemons.info.types.map((type: string) => type.name)}
                            - Talents -> pokemons.info.types.map((t: any) => t.type.name)
                        */
                        <IonCard key={index}>
                            <IonCardHeader>
                                <IonCardTitle>
                                    # {pokemons.info.id} - {pokemons.info.name}
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>Image : <img src={pokemons.info.sprites.front_default}/></IonCardContent>
                            {/* <IonCardContent>Description :  {pokemons.info.flavor_text_entries[0].flavor_text}</IonCardContent> */}
                            <IonCardContent>Taille : {pokemons.info.height}</IonCardContent>
                            <IonCardContent>Poids :{pokemons.info.weight}</IonCardContent>
                            <IonCardContent>Types : {pokemons.info.types.map((t: any) => <li>{t.type.name}</li>)}</IonCardContent>
                            <IonCardContent>Talents : {pokemons.info.abilities.map((t: any) => <li>{t.ability.name}</li>)}</IonCardContent>
                        </IonCard>
                    ))}
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
}

export default Pokedex;