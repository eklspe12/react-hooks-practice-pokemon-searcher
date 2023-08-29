import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeSearch, setPokeSearch] = useState("");


  useEffect(()  => {
    fetch("http://localhost:3001/pokemon").then((r) => r.json())
    .then(setPokemons)
    console.log(pokemons)
  }, []);

const pokeToDisplay = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokeSearch.toLowerCase())
);

function handleAdd(newPokemon) {
  setPokemons([...pokemons, newPokemon]);

}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAdd}/>
      <br />
      <Search pokeSearch={pokeSearch} onSearchChange={setPokeSearch}/>
      <br />
      <PokemonCollection pokemons={pokeToDisplay} />
    </Container>
  );
}

export default PokemonPage;
