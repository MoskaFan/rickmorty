import React from 'react';
import CharacterGallery from "./CharacterGallery";
import {API} from './characters';
import './CharacterGallery.css';
import './App.css';
import GreetingsComponent from "./GreetingsComponent";


function App() {
    const list = API;
  return (
      <div className="App">
          <GreetingsComponent></GreetingsComponent>

      <CharacterGallery characterList={list}></CharacterGallery>

    </div>
  );
}

export default App;
