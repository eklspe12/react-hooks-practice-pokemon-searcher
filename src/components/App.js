import React, { useEffect, useState } from "react";
import PokemonPage from "./PokemonPage";


function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(()  => {
    fetch("http://localhost:3001/pokemon").then((r) => r.json())
    .then((pokemonData) => setPokemons(pokemonData))
  }, []);

  return (
    <div className="App">
      <PokemonPage pokemons={pokemons}/>
    </div>
  );
}

export default App;
