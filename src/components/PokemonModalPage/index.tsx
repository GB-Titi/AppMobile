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
    console.log(pkmnType)
    let imgType = ""
    // const AllTypes = [
    //     "normal",
    //     "fighting",
    //     "flying",
    //     "poison",
    //     "ground",
    //     "rock",
    //     "bug",
    //     "ghost",
    //     "steel",
    //     "fire",
    //     "water",
    //     "grass",
    //     "electric",
    //     "psychic",
    //     "ice",
    //     "dragon",
    //     "dark",
    //     "fairy",
    //     "unknown",
    //     "shadow",
    // ]

    // const { pokemon } = usePokemonData(pkmnType)
    // const {pokemonSpeciesData } = usePokemonSpeciesData(pkmnType)

    // console.log("pokémon data", pokemon)
    // console.log("pokémon data Species", pokemonSpeciesData)
    return (
        <IonContent className="modal">
            {/* Faire un case en fonction du type -> charger une image du type */}      
            <IonGrid className="modal_content">
                <IonCol className="modal_col">
                    <IonCol className="modal_img">
                        <img className="img_pkmn" alt={pkmnName} src={pkmnImg}></img>
                    </IonCol>
                    <IonCol className="modal_infos">
                        <IonRow className="modal_1st_row">
                            <IonCol className="pkmn_numb">No.{pkmnNum}</IonCol>
                            <IonCol className="pkmn_name">{pkmnName}</IonCol> 
                        </IonRow>       

                        <IonRow className="modal_2nd_row">
                            {pkmnType.map(function(object, i){
                                console.log(object)
                                if(object as string == 'normal'){
                                    imgType = "/assets/types/normal.png"
                                }else if(object as string == 'fighting'){
                                    imgType = "/assets/types/fighting.png"
                                }else if(object as string == 'flying'){
                                    imgType = "/assets/types/flying.png"
                                }else if(object as string == 'poison'){
                                    imgType = "/assets/types/poison.png"
                                }else if(object as string == 'ground'){
                                    imgType = "/assets/types/ground.png"
                                }else if(object as string == 'rock'){
                                    imgType = "/assets/types/rock.png"
                                }else if(object as string == 'bug'){
                                    imgType = "/assets/types/bug.png"
                                }else if(object as string == 'ghost'){
                                    imgType = "/assets/types/ghost.png"
                                }else if(object as string == 'steel'){
                                    imgType = "/assets/types/steel.png"
                                }else if(object as string == 'fire'){
                                    imgType = "/assets/types/fire.png"
                                }else if(object as string == 'water'){
                                    imgType = "/assets/types/water.png"
                                }else if(object as string == 'grass'){
                                    imgType = "/assets/types/grass.png"
                                }else if(object as string == 'electric'){
                                    imgType = "/assets/types/electric.png"
                                }else if(object as string == 'psychic'){
                                    imgType = "/assets/types/psychic.png"
                                }else if(object as string == 'ice'){
                                    imgType = "/assets/types/ice.png"
                                }else if(object as string == 'dragon'){
                                    imgType = "/assets/types/dragon.png"
                                }else if(object as string == 'dark'){
                                    imgType = "/assets/types/dark.png"
                                }else if(object as string == 'fairy'){
                                    imgType = "/assets/types/fairy.webp"
                                }else if(object as string == 'unknown'){
                                    imgType = "/assets/types/unknown.png"
                                }else if(object as string == 'shadow'){
                                    imgType = "/assets/types/shadow.png"
                                }else{
                                    return console.log('pas trouvé')
                                }
                                return <IonCol key={i} className="modal_types"><img src={imgType} /></IonCol>;
                            })}
                        </IonRow>     

                        <IonRow className="modal_poid">WT : {pkmnPoid}''</IonRow>
                        <IonRow className="modal_poid">HT : {pkmnTaille} lbs.</IonRow>
                        <IonRow className="modal_talents">
                            {pkmnTalents.map(function(object, i){      
                                if(i < 2){
                                    return <IonCol className="col_talents" key={i}>{object}</IonCol>;
                                }              
                            })}
                        </IonRow>
                    </IonCol>  
                    <IonRow className="modal_desc">{pkmnDesc}</IonRow>   

                    {/* {pkmnType == "fire"
                        ? <IonRow>Test</IonRow>
                        : <IonRow>nan</IonRow>
                    } */}
                    {/* <IonRow>Type : {pkmnType} </IonRow> */}
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