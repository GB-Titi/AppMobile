import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInfiniteScroll, IonModal, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./index.css";
// import { useApi, usePokemonData, usePokemonSpeciesData } from "../../hooks";

type pkdxNumber = {
    dexNumber: number
}

const Pokedex = ({ dexNumber }: pkdxNumber) => {
    // const { pokemon } = useApi();

    const [pkmnNumber, setPkmnNumber] = useState(dexNumber)

    // const { pokemon } = usePokemonData(pkmnNumber)
    // const {pokemonSpeciesData } = usePokemonSpeciesData(pkmnNumber)

    // console.log("pokémon data", pokemon)
    // console.log("pokémon data Species", pokemonSpeciesData)
    return (
        <IonContent>
            pokémon : {pkmnNumber}
            <IonGrid>
                
                {/*{pokemonSpeciesData.flavor_text_entries[0].flavor_text}
                <IonCol>
                        {pkmnNumber > 1
                            ? <IonButton onClick={() => setPkmnNumber(pkmnNumber - 1)}>&lt;- </IonButton>
                            : <IonButton color='medium'>&lt;- </IonButton>}

                        #{pokemonSpeciesData.id} - {pokemonSpeciesData.name}

                        {pkmnNumber <= 99
                            ? <IonButton onClick={() => setPkmnNumber(pkmnNumber + 1)}>-&gt;</IonButton>
                            : <IonButton color='medium'>-&gt;</IonButton>}
                    </IonCol> <IonRow>
                    <IonCol>
                        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />

                    </IonCol>
                </IonRow> */}
                {/* <IonRow>
                    <IonCol>

                        #{pokemon.id} - {pokemon.name}
  
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="4">Type(s)</IonCol>
                    <IonCol size="4">Taille</IonCol>
                    <IonCol size="4">Poids</IonCol>
                    <IonCol size="4">{pokemon.types.map((t: any) => t.type.name + ' ')}</IonCol>
                    <IonCol size="4">{parseInt(pokemon.weight) / 10} kg</IonCol>
                    <IonCol size="4">{parseInt(pokemon.height) / 10} m</IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="4">Talent 1</IonCol>
                    <IonCol size="4">Talent 2</IonCol>
                    <IonCol size="4">Talent Caché</IonCol>
                    <IonCol size="4"> {pokemon.abilities[0].ability.name}</IonCol>
                    <IonCol size="4">{pokemon.abilities[1].ability.name}</IonCol>
                    <IonCol size="4">{pokemon.abilities[2].ability.name}</IonCol>
                </IonRow>
                <IonRow>
                    <IonButton color='primary'>
                        Créer une nouvelle équipe avec ce Pokémon
                    </IonButton>
                </IonRow> */}
            </IonGrid>
        </IonContent>
    );
}

export default Pokedex;