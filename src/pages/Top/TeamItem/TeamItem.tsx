import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInfiniteScroll, IonModal, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Top, TopItem } from "../../../types";
import { from } from "rxjs";
import { usePokemon, usePokemonSpecies } from "../../../hooks";

type pkdxNumber = {
    dexNumber: TopItem
}

const TeamItem = ({ dexNumber }: pkdxNumber) => {
    const { pokemon } = usePokemon(dexNumber.name)
    const { pokemonSpecies } = usePokemonSpecies(dexNumber.name)
    console.log("Pokémon On List", pokemon, 'pokemonSpecies', pokemonSpecies);

    return (
        <IonCard key={dexNumber.order}>
            {pokemon && <img src={pokemon.sprites.other["official-artwork"].front_default} />}
            <IonCardHeader>
                <IonCardTitle>
                    {dexNumber.order}. {pokemon && pokemon.name}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{pokemonSpecies && pokemonSpecies.flavor_text_entries[0].flavor_text}</IonCardContent>
        </IonCard>

    )
}

export default TeamItem