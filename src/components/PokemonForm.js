import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [formPokemon, setFormPokemon] = useState(
    {
      name: "",
      hp: "", 
      frontUrl: "",
      backUrl: ""
    }
  );


function handleChange (e) {
  setFormPokemon({
    ...formPokemon,
    [e.target.name]:e.target.value
  });
}


 function handleSubmit () {
  const newPokemon = {
    name:formPokemon.name,
    hp:formPokemon.hp,
    sprites: {
      front: formPokemon.frontUrl,
      back: formPokemon.backUrl,
    },
  };

  fetch("http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type":"application/json",
    },
    body: JSON.stringify(newPokemon)
  }).then((r) => r.json()).then(onAddPokemon);
  
 }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formPokemon.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formPokemon.hp} onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formPokemon.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formPokemon.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
