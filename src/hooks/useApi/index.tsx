import { resolve } from "dns";
import React, { useEffect, useState } from "react";
import { Pokedex } from "../../pages";

const useApi = () => {
    const [pokedex, setPokedex] = useState({});
    const [pokemon, setInfo] = useState({});

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(res => res)
            .then(setPokedex)
    }, [])


    //a commenter pour faire fonctionner
    //Principe : promesse où on fetch chaque url des pokemons pour concaténer aux infos déjà présentes
    Promise.all(
        pokedex.map(pokemon => new Promise(resolve => fetch(pokemon.url).then((info) => resolve({pokemon, info})))))
        ).then((pokemonsInfo) => {
        
        const newArr = pokedex.concat(pokemonsInfo);
        
        setState(newArr)
        
    })
    // useEffect(() => {
    //     const arrPokedex = Object.values(pokedex);
    //     arrPokedex.map(pokemon => fetch(pokemon.url).then(info => console.log(info)))
    // })

    return {
        pokedex,
        // newArr
    };
}

export default useApi;