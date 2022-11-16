import './CharacterGallery.css';
import React from "react";


type Character = {
    name: string,
    image: string,
    status: string,
    id: number
}
type CharacterGalleryProps = {
    characterList: Character[]
}
export default function CharacterGallery(props: CharacterGalleryProps){
    const peopleComponents = props.characterList.map(
        (character: Character) => {

            return <div key={character.id} className={"div"}>
                <h3>{character.name}</h3>
                <img src={character.image}/><br/>
                <em>{character.status}</em><br/>

            </div>;



        }
    );



    return(
        <div className={"Gallery"}>
            {peopleComponents}
        </div>
    )
}