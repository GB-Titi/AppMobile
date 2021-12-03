import { resolve } from "dns";
import React, { useEffect, useState } from "react";
import { Pokedex } from "../../pages";

const useApi = () => {
    const [pokedex, setPokedex] = useState([]);
    const [pokemon, setInfo] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(res => res.json())
            .then(setPokedex)
    }, [])

    useEffect(() => {
        if (pokedex.length > 0) {
            Promise.all(
                pokedex.map((pokemon: any) => new Promise(resolve => fetch(pokemon.url).then((info) => resolve({ pokemon, info }))))
            ).then((pokemonsInfo: any) => {
                const newArr = pokemon.concat(pokemonsInfo);
                console.log("array: " + newArr);
                setInfo(newArr);
            })
        }
    }, [pokedex])
    // useEffect(() => {
    //     const arrPokedex = Object.values(pokedex);
    //     arrPokedex.map(pokemon => fetch(pokemon.url).then(info => console.log(info)))
    // })

    return {
        pokedex,
        pokemon
    };
}

export default useApi;