import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInfiniteScroll, IonModal, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Top, TopItem } from "../../../types";
import { from } from "rxjs";
import { usePokemon, usePokemonSpecies, useAreaEncounter } from "../../../hooks";
import "./TeamItem.css";

type pkdxNumber = {
    dexNumber: TopItem
}

const TeamItem = ({ dexNumber }: pkdxNumber) => {
    const { pokemon } = usePokemon(dexNumber.name)
    const { pokemonSpecies } = usePokemonSpecies(dexNumber.name)
    const { pokemonArea } = useAreaEncounter(dexNumber.name)
    console.log("Pokémon On List", pokemon, 'pokemonSpecies', pokemonSpecies);

    return (
        <IonCard className="pokemon_content" key={dexNumber.order}>
            {pokemon && <img src={pokemon.sprites.other["official-artwork"].front_default} />}
            <IonCardHeader>
                <IonCardTitle className="pokemon_name">
                    #{dexNumber.order} - {pokemon && pokemon.name}
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent className="desc">{pokemonSpecies && pokemonSpecies.flavor_text_entries[0].flavor_text}</IonCardContent>
                <IonRow className="xp">BASE XP: {pokemon && pokemon.base_experience}</IonRow>
                <IonRow className="Area">Areas encounter:</IonRow>
                {pokemonArea && pokemonArea.map(
                    (t: any, i: number) => 
                    <IonRow className="area_name" key={i}>
                        {t.location_area.name}
                    </IonRow>
                )}
        </IonCard>

    )
}

export default TeamItem