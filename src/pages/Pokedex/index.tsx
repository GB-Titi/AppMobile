import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./index.css";
import { useApi } from "../../hooks";

const Pokedex = () => {
  const { pokemon } = useApi();
  useEffect(() => {
    if (pokemon.length > 0) {
      // console.log("🚀 ~ file: index.tsx ~ line 10 ~ useEffect ~ pokemon", pokemon.map((pokemons: any) => ({
      //     types: pokemons.info.types.map((t: any) => t.type.name)
      // })))
      console.log(
        "test:",
        pokemon.map((pokemons: any) =>
          pokemons.info.types.map((t: any /*, i: number*/) => t.type.name)
        )
      );
      console.log(
        "description: ",
        pokemon.map((pokemons: any) => pokemons.info.species.url)
      );
    }
  }, [pokemon]);
  // console.log(pokemon.map((pokemons: any) => console.log(pokemons.info.abilities)));
  return (
    <IonPage id="PokedexPage">
      <IonHeader class="ion-justify-content-start">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          
          </IonButtons>
          <IonTitle>Pokédex</IonTitle>
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
            <IonCard className="card" key={index}>
            <IonCardContent className="header-img"><img src={pokemons.info.sprites.front_default} /></IonCardContent>
          
           
              {/* <IonCardContent>Description :  {pokemons.description.flavor_text_entries}</IonCardContent> */}
             
                <IonCardContent className="card-content-info">
                <IonCardTitle className="card-content-title"># {pokemons.info.id} - {pokemons.info.name}</IonCardTitle>
               <div className="card-content-text">
                   <div className="type-title">Types :</div>
                <ul key={index}>
                  {" "}
                  {pokemons.info.types.map((t: any, i: number) => (
                    <li className="" key={i}>{t.type.name}</li>
                  ))}{" "}
                </ul>
                </div>
                </IonCardContent>
              {/* <IonCardContent>
                Talents :
                <ul key={index}>
                  {" "}
                  {pokemons.info.abilities.map((t: any, i: number) => (
                    <li key={i}>{t.ability.name}</li>
                  ))}
                </ul>
              </IonCardContent> */}
            </IonCard>
          ))}
          <IonButtons>
            <IonButton>Previus</IonButton>
            <IonButton>Next</IonButton>
          </IonButtons>
        </IonInfiniteScroll>
      </IonContent>
    </IonPage>
  );
};

export default Pokedex;
