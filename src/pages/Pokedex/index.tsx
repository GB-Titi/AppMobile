import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonInfiniteScroll, IonNote, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./index.css";
import { useApi } from "../../hooks";

const Pokedex = () => {
    const { pokemon, setInfo } = useApi();
    // useEffect(() => {
    //   if(pokemon.length > 0){
    //     // console.log("🚀 ~ file: index.tsx ~ line 10 ~ useEffect ~ pokemon", pokemon.map((pokemons: any) => ({
    //     //     types: pokemons.info.types.map((t: any) => t.type.name)
    //     // })))
    //     // console.log(pokemon)

    //     // Promise.all(
    //     //     pokedex.results.map((pokemon, i) => new Promise(resolve =>  setTimeout(() =>
    //     //     fetch(pokemon.url).then(res => res.json()).then((info) => resolve({ pokemon, info })), 15 * i)))
    //     // ).then((pokemonsInfo: any) => {
    //     //     const newArr = pokemon.concat(pokemonsInfo);
    //     //     console.log("🚀 ~ file: index.tsx ~ line 31 ~ ).then ~ newArr", newArr)
    //     //     setInfo(newArr);
    //     // })

    //     // new Promise(resolve => fetch(pokemon.info.species.url).then((description) => resolve(setInfo(description))))
    //     // // console.log("test:", pokemon.map((pokemons: any) =>pokemons.info.types.map((t: any/*, i: number*/) => t.type.name)))
    //     // // console.log("description: ",pokemon.map((pokemons: any) =>fetch(pokemons.info.species.url).then(res => res.json())))
    //     console.log('TRY DESCRIPTION :' + pokemon)
    //   }
    // }, [pokemon])
    
    // console.log(pokemon.map((pokemons: any) => console.log(pokemons.info.abilities)));

    if (!pokemon) {
        return (
          <IonPage>
            <IonHeader class="ion-justify-content-start">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                        <IonTitle>Pokédex</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
              <p>Chargement</p>
            </IonContent>
          </IonPage>
        );
      }

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
                            <IonCardHeader key={index}>
                                <IonCardTitle>
                                    # {pokemons.info.id} - {pokemons.info.name}
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>Image : <img src={pokemons.info.sprites.front_default}/></IonCardContent>
                            {/* <IonCardContent>Description :  {pokemons.description.flavor_text_entries}</IonCardContent> */}
                            <IonCardContent>Taille : {pokemons.info.height}</IonCardContent>
                            <IonCardContent>Poids :{pokemons.info.weight}</IonCardContent>
                            <IonCardContent>Types :<ul key={index}> {pokemons.info.types.map((t: any, i: number) => <li key={i}>{t.type.name}</li>)} </ul></IonCardContent>
                            <IonCardContent>Talents :<ul key={index}> {pokemons.info.abilities.map((t: any, i: number) => <li key={i}>{t.ability.name}</li>)}</ul></IonCardContent>
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
}

export default Pokedex;