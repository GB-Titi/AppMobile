import { resolve } from "dns";
import React, { useEffect, useState } from "react";
import { Pokedex } from "../../pages";

type Pokemon = {}
 
type Pokedex = {
    count: number;
    next: string;
    previous: string;
    results : {name: string; url: string}[]
}

const useApi = () => {
    const [pokedex, setPokedex] = useState<Pokedex|null>(null);
    const [pokemon, setInfo] = useState<any>([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(res => res.json())
            .then((res: Pokedex) => setPokedex(res))
    }, [])

    useEffect(() => {
        if (pokedex) {
            Promise.all(
                pokedex.results.map((pokemon, i) => new Promise(resolve => setTimeout(() => 
                fetch(pokemon.url).then(res => res.json()).then((info) => resolve({ pokemon, info })), 50 * i)))
            ).then((pokemonsInfo: any) => {
                const newArr = pokemon.concat(pokemonsInfo);
                console.log("🚀 ~ file: index.tsx ~ line 31 ~ ).then ~ newArr", newArr)
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