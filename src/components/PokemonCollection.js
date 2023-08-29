import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  console.log("Collection", pokemons)
   const cards = pokemons.map((poke) => ( 
    <PokemonCard key={poke.id} pokemons={poke} />
   ));
  return (
    <Card.Group itemsPerRow={6}>
    {cards}
    </Card.Group>
  );
}

export default PokemonCollection;
