import React, { useState } from "react";
import {
	IonButton,
	IonCol,
	IonGrid,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonRow,
	IonList,
	IonItemDivider,
	IonSelect,
	IonSelectOption,
} from "@ionic/react";
import {
	add,
	clipboardOutline,
	imageOutline,
	informationOutline,
	linkOutline,
	saveOutline,
} from "ionicons/icons";
import { TopItem, Top } from "../../types";
import { useApi } from "../../hooks";
import { PokemonsSelect } from "..";
import "./TopForm.css";

type TopFormProps = {
	onSubmit: (top: Top) => void;
};

const TopForm = ({ onSubmit }: TopFormProps) => {
	const { pokemon } = useApi();

	const [title, setTitle] = useState<string>("");
	const [items, setItems] = useState<TopItem[]>([]);

	const appendNewItem = () => {
		setItems(
			items.concat({
				order: items.length + 1,
				name: "",
			})
		);
	};
	const modifyItem = (item: TopItem) =>
		setItems((_items) => {
			let itemFind = _items.find((i) => i.order === item.order);
			if (!itemFind) return _items;
			itemFind = item;
			return Array.from(_items);
		});
	return (
		<IonGrid>
			<IonRow>
				<IonCol>
					<IonItem>
						<IonLabel position="floating">Nommez votre équipe</IonLabel>
						<IonIcon icon={clipboardOutline} slot="start" />
						<IonInput
							value={title}
							onIonChange={(e) => setTitle(e.detail.value || "")}
						></IonInput>
					</IonItem>
				</IonCol>
			</IonRow>
			<IonRow className="add_element">
				<IonCol>
					<IonButton className="add_btn" shape="round" color="success" onClick={appendNewItem}>
						<IonIcon icon={add} className="add"/>
					</IonButton>
					<IonLabel className="add_pokemon">Ajoutez un pokémon à votre équipe </IonLabel>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonList>
						{items.map((item) => (
							<IonCol key={item.order}>
								<IonItemDivider>
									{item.order}. {item.name}
								</IonItemDivider>

								<IonSelect onIonChange={(e) => {
									item.name = e.detail.value || "";
									modifyItem(item);
									}} interface="alert">

									{pokemon.map((pokemons: any, index: number) => (
										<IonSelectOption value={pokemons.info.id} key={pokemons.info.name}> {pokemons.info.name} - {pokemons.info.types.map((t: any, i: number) => <li key={i}>{t.type.name}</li>)} </IonSelectOption>
									))}
								</IonSelect>

							</IonCol>
						))}
					</IonList>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonButton
						shape="round"
						expand="full"
						color="primary"
						onClick={() => onSubmit({ title, items })}
					>
						Sauvegarder
						<IonIcon slot="end" icon={saveOutline} />
					</IonButton>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default TopForm;
