import React, { useState } from "react";
import {
    IonSelect, IonSelectOption,
} from "@ionic/react";
import { useApi } from "../../hooks";

const PokemonsSelect = () => {
    const { pokemon } = useApi();

    return (
        <IonSelect interface="alert" placeholder="Select One">
            {pokemon.map((pokemons: any, index: number) => (
                <IonSelectOption value={pokemons.info.id} key={pokemons.info.name}> {pokemons.info.name} </IonSelectOption>         
            ))}
        </IonSelect>
    )
};

export default PokemonsSelect;
