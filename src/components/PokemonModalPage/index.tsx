import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInfiniteScroll, IonModal, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./PokemonModalPage.css";
import { useApi } from "../../hooks";

type pkdxData = {
    dexName: string;
    dexType: Array<"">;
    dexNum: number;
    dexImg: string; 
    // dexDesc: string;
    dexTaille: number;
    dexPoid: number;
    dexTalents: Array<"">;
}

type Desc = {
    desc : string
}

const PokemonModalPage = ({ dexName,
                            dexNum,
                            dexImg,
                            // dexDesc,
                            dexType, 
                            dexTaille,
                            dexPoid,
                            dexTalents,
                        }: pkdxData) => {
    // const { pokemon } = useApi();
    console.log(dexName);
    const [pkmnType, setPkmnType] = useState(dexType)
    const [pkmnName, setPkmnName] = useState(dexName)
    const [pkmnNum, setPkmnNum] = useState(dexNum)
    const [pkmnImg, setPkmnImg] = useState(dexImg)
    const [pkmnDesc, setPkmnDesc] = useState<Desc>()
    const [pkmnTaille, setPkmnTaille] = useState(dexTaille)
    const [pkmnPoid, setPkmnPoid] = useState(dexPoid)
    const [pkmnTalents, setPkmnTallents] = useState(dexTalents)
    const Description = fetch("https://pokeapi.co/api/v2/pokemon-species/" + pkmnNum + "/")
    .then(res => res.json())
    .then(function(result) {
        // console.log(result.flavor_text_entries[0].flavor_text)
        if(!pkmnDesc){
            setPkmnDesc(result.flavor_text_entries[0].flavor_text)
        }
    })

    console.log(pkmnDesc)
    // const { pokemon } = usePokemonData(pkmnType)
    // const {pokemonSpeciesData } = usePokemonSpeciesData(pkmnType)

    // console.log("pokémon data", pokemon)
    // console.log("pokémon data Species", pokemonSpeciesData)
    return (
        <IonContent>
            {/* Faire un case en fonction du type -> charger une image du type */}      
            <IonGrid>
                <IonCol>
                    <IonRow>Nom : {pkmnName}</IonRow>
                    <IonRow>Numéro : {pkmnNum}</IonRow>
                    <IonRow>Description : {pkmnDesc}</IonRow>
                    <IonRow><img alt={pkmnName} src={pkmnImg}></img></IonRow>
                    <IonRow>Poid : {pkmnPoid}</IonRow>
                    <IonRow>Taille : {pkmnTaille}</IonRow>
                    <IonRow>Talents : {pkmnTalents}</IonRow>
                    <IonRow>Type : {pkmnType} </IonRow>
                </IonCol>
                {/*{pokemonSpeciesData.flavor_text_entries[0].flavor_text}
                <IonCol>
                        {pkmnType > 1
                            ? <IonButton onClick={() => setPkmnType(pkmnType - 1)}>&lt;- </IonButton>
                            : <IonButton color='medium'>&lt;- </IonButton>}

                        #{pokemonSpeciesData.id} - {pokemonSpeciesData.name}

                        {pkmnType <= 99
                            ? <IonButton onClick={() => setPkmnType(pkmnType + 1)}>-&gt;</IonButton>
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

export default PokemonModalPage;