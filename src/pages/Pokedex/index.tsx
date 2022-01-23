import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonHeader, IonInfiniteScroll, IonModal, IonNote, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState, useEffect } from "react";
import "./index.css";
import { useApi } from "../../hooks";
import { PokemonModalPage } from "../../components";

const Pokedex = () => {
    const [showModal, setShowModal] = useState(false)
    const [currentDexName, setCurrentDexName] = useState("")
    const [currentDexNum, setCurrentDexNum] = useState(1)
    const [currentDexImg, setCurrentDexImg] = useState("")
    const [currentDexPoid, setCurrentDexPoid] = useState(1)
    // const [currentDexDesc, setCurrentDexDesc] = useState("")
    const [currentDexTaille, setCurrentDexTaille] = useState(1)
    const [currentDexTalents, setCurrentDexTalents] = useState([])
    const [currentDexType, setCurrentDexType] = useState([])
    const [page, setCurrentPage] = useState(1)

    const { pokemon } = useApi();
    useEffect(() => {
        if (pokemon.length > 0) {
            // console.log("🚀 ~ file: index.tsx ~ line 10 ~ useEffect ~ pokemon", pokemon.map((pokemons: any) => ({
            //     types: pokemons.info.types.map((t: any) => t.type.name)
            // })))
            console.log("test:", pokemon.map((pokemons: any) => pokemons.info.types.map((t: any/*, i: number*/) => t.type.name)))
            console.log("description: ", pokemon.map((pokemons: any) => pokemons.info.species.url))
             // console.log(pokemon.map((pokemons: any) => console.log(pokemons.info.abilities)));
            // console.log("description: ",pokemon.map((pokemons: any) =>fetch(pokemons.info.species.url).then(res => res.json())))
        }
    }, [pokemon])

 

    if (!pokemon) {
        return (
          <IonPage>
            <IonHeader class="ion-justify-content-start">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                        <IonTitle>Pokédex</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
              <p>Chargement</p>
            </IonContent>
          </IonPage>
        );
      }

    return (
        <IonPage id="PokedexPage">
            <IonHeader class="ion-justify-content-start">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                        <IonTitle>Pokédex</IonTitle>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonModal
                    isOpen={showModal}
                    onDidDismiss={() => setShowModal(false)} >
                    <IonButton onClick={() => setShowModal(false)}>X</IonButton>

                    <PokemonModalPage 
                        dexName={currentDexName} 
                        dexNum={currentDexNum}
                        dexImg={currentDexImg} 
                        // dexDesc={currentDexDesc}
                        dexTaille={currentDexTaille} 
                        dexPoid={currentDexPoid}
                        dexTalents={currentDexTalents} 
                        dexType={currentDexType}
                        // ... tes autes données sous la meme forme qui doivent etre renseignées dans le type du componsant modale
                        ></PokemonModalPage>                  
                </IonModal>
                <IonInfiniteScroll>
                    {pokemon.map((pokemons: any, index: number) => (
                        /* lister : 
                            - Nom ->  {pokemons.info.name}
                            - # Numéro -> {pokemons.info.id}
                            - Image ->  {pokemons.info.sprites.front_default}
                            - Description ->  {pokemons.info.flavor_text_entries[0].flavor_text}
                            - Taille -> {pokemons.info.height} / {pokemons.info.width}
                            - Poid -> {pokemons.info.weight}
                            - Types -> {pokemons.info.types.map((type: string) => type.name)}
                            - Talents -> pokemons.info.types.map((t: any) => t.type.name)
                        */
                        <IonCard key={index} onClick={() => {
                            setShowModal(true)
                            setCurrentDexName(pokemons.info.name)
                            setCurrentDexNum(pokemons.info.id)
                            // setCurrentDexDesc(pokemons.info.flavor_text_entries[0].flavor_text)
                            setCurrentDexImg(pokemons.info.sprites.front_default)
                            setCurrentDexPoid(pokemons.info.weight)
                            setCurrentDexTaille(pokemons.info.height)
                            setCurrentDexTalents(pokemons.info.abilities.map((t: any) => t.ability.name))
                            setCurrentDexType(pokemons.info.types.map((t: any) => t.type.name))
                        }}>
                            <IonCardHeader key={index}>
                                <IonCardTitle>
                                    # {pokemons.info.id} - {pokemons.info.name} <img alt={pokemons.info.name} src={pokemons.info.sprites.front_default} />
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent></IonCardContent>
                            {/* <IonCardContent>Description :  {pokemons.description.flavor_text_entries}</IonCardContent> */}
                            {/* <IonCardContent>Taille : {pokemons.info.height}</IonCardContent>
                            <IonCardContent>Poids :{pokemons.info.weight}</IonCardContent>
                            <IonCardContent>Types :<ul key={index}> {pokemons.info.types.map((t: any, i: number) => <li key={i}>{t.type.name}</li>)} </ul></IonCardContent>
                            <IonCardContent>Talents :<ul key={index}> {pokemons.info.abilities.map((t: any, i: number) => <li key={i}>{t.ability.name}</li>)}</ul></IonCardContent> */}

                            {/* <IonButton onClick={() => {
                                setShowModal(true)
                                setCurrentDexNumber(pokemons.info.id)
                            }}>Show Modal</IonButton> */}
                        </IonCard>
                    ))}
                    <IonButtons>
                        <IonButton>Previus</IonButton>
                        <IonButton>Next</IonButton>
                    </IonButtons>
                </IonInfiniteScroll>
            </IonContent>
        </IonPage>
    );
}

export default Pokedex;