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

const useApi = (pkmnOffset? : number) => {
    const [pokedex, setPokedex] = useState<Pokedex|null>(null);
    const [pokemon, setInfo] = useState<any>([]);
    // const [description, setDescription] = useState<Pokemon|null>(null);



    const offset = 50
    useEffect(() => {
        if(!pokedex){
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&${offset}`)
                .then(res => res.json())
                .then((res: Pokedex) => setPokedex(res))
        }
    }, [])
 
    // const p1 = new Promise(resolve =>fetch(pokemon.url).then(res => res.json()).then((info) => resolve({ pokemon, info })));


    // useEffect(() => {
    //     if (pokedex) {
    //         Promise.all(
    //             pokedex.results.map((pokemon) => [p1, p2])
    //         ).then((pokemonsInfo: any) => {
    //             const newArr = pokemon.concat(pokemonsInfo);
    //             console.log("🚀 ~ file: index.tsx ~ line 31 ~ ).then ~ newArr", newArr)
    //             setInfo(newArr);
    //         })
    //     }
    // }, [pokedex])

    // const p2 = new Promise(resolve => fetch(pokemon.info.species.url).then(res => res.json().then((description) => resolve({pokemon, description}))))

    useEffect(() => {
        if (pokedex) {
            Promise.all(
                pokedex.results.map((pokemon, i) => new Promise(resolve =>  setTimeout(() =>
                fetch(pokemon.url).then(res => res.json()).then((info) => resolve({ pokemon, info })), 25 * i)))
            ).then((pokemonsInfo: any) => {
                const newArr = pokemon.concat(pokemonsInfo);
                console.log("🚀 ~ file: index.tsx ~ line 31 ~ ).then ~ newArr", newArr)
                setInfo(newArr);
            })
        }
    }, [pokedex])

    // useEffect(() => {
    //     if (pokedex) {
    //         Promise.all(
    //             pokedex.results.map((pokemon, i) => new Promise(resolve =>  setTimeout(() =>
    //             fetch(pokemon.species.url).then(res => res.json()).then((info) => resolve({ pokemon, info })), 15 * i)))
    //         ).then((pokemonsInfo: any) => {
    //             const newArr = pokemon.concat(pokemonsInfo);
    //             console.log("🚀 ~ file: index.tsx ~ line 31 ~ ).then ~ newArr", newArr)
    //             setInfo(newArr);
    //         })
    //     }
    // }, [pokedex])

    // useEffect(() => {
    //     if(pokedex){
    //         new Promise(resolve => fetch(pokemon.info.species.url).then(res => res.json().then((description) => resolve({pokemon, description}))))
    //     }
    // }, [pokedex])

    // useEffect(() => {
    //     if (pokemon) {
    //         Promise.all(
    //             pokemon.info.species.map((desc :any, i: number) => new Promise(resolve => setTimeout(() => 
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
        setInfo
    };
}

export default useApi;