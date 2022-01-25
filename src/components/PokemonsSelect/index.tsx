import React, { useState } from "react";
import {
    IonSelect, IonSelectOption,
} from "@ionic/react";
import { useApi } from "../../hooks";
import "./PokemonSelect.css";

const PokemonsSelect = () => {
    const { pokemon } = useApi();

    return (
        <IonSelect interface="alert" placeholder="Select One">
            {pokemon.map((pokemons: any, index: number) => (
                <IonSelectOption value={pokemons.info.id} key={pokemons.info.name}> {pokemons.info.name} - {pokemons.info.types.map((t: any, i: number) => <li key={i}>{t.type.name}</li>)} </IonSelectOption>         
            ))}
        </IonSelect>
    )
};

export default PokemonsSelect;
