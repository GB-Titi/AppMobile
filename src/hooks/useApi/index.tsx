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

// type Pokemon = {
//     count: number;
//     next: string;
//     previous: string;
//     results : {name: string; url: string}[]
// }

const useApi = () => {
    const [pokedex, setPokedex] = useState<Pokedex|null>(null);
    const [pokemon, setInfo] = useState<any>([]);
    // const [description, setDescription] = useState<Pokemon|null>(null);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=100")
            .then(res => res.json())
            .then((res: Pokedex) => setPokedex(res))
    }, [])

    useEffect(() => {
        if (pokedex) {
            Promise.all(
                pokedex.results.map((pokemon, i) => new Promise(resolve => 
                fetch(pokemon.url).then(res => res.json()).then((info) => resolve({ pokemon, info }))))
            ).then((pokemonsInfo: any) => {
                const newArr = pokemon.concat(pokemonsInfo);
                console.log("🚀 ~ file: index.tsx ~ line 31 ~ ).then ~ newArr", newArr)
                setInfo(newArr);
            })
        }
    }, [pokedex])

    // useEffect(() => {
    //     if (pokemon) {
    //         Promise.all(
    //             pokemon.species.map((desc :any, i: number) => new Promise(resolve => setTimeout(() => 
    //             fetch(desc.url).then(res => res.json()).then((info) => resolve({ desc, info })), 50 * i)))
    //         ).then((description: any) => {
    //             // const newArr = pokemon.concat(description);
    //             // console.log("🚀 ~ file: index.tsx ~ line 31 ~ ).then ~ newArr", newArr)
    //             // setInfo(newArr);
    //             console.log(description)
    //         })
    //     }
    // }, [pokemon])
    // useEffect(() => {
    //     const arrPokedex = Object.values(pokedex);
    //     arrPokedex.map(pokemon => fetch(pokemon.url).then(info => console.log(info)))
    // })

    return {
        pokemon,
    };
}

export default useApi;