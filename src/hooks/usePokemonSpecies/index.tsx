import React, { useEffect, useState } from "react"

type Pokemon = {}

const usePokemonSpecies = (pkmnNumber: string) => {
    const [pokemonSpecies, setPokemonSpecies] = useState<any>(null)
    //Information supplémentaire concernant le pokémon (Notemment le nom En Francais)
    const [error, setError] = useState<Error | null>()
    console.log("api addr ", "https://pokeapi.co/api/v2/pokemon-species/" + pkmnNumber);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon-species/" + pkmnNumber)
            .then(res => res.json())
            .then((res: Pokemon) => setPokemonSpecies(res))
            .catch((error) => {
                setError(error)
                console.log('error', error);

            }

            )
        console.log('api call done');
    }, [])

    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon-species/"+pkmnNumber)
    //     .then(res => res.json())
    //     .then((res: Pokemon) => setPokemonFr(res))
    // })
    return {
        pokemonSpecies,
        // pokemonFr
    }
}

export default usePokemonSpecies;