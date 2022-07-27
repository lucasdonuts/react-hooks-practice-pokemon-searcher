import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    setFormData(formData => {
      if( e.target.name === 'front' || e.target.name === 'back') {
        return {
          ...formData,
          sprites: {
            ...formData.sprites,
            [e.target.name]: e.target.value
          }
        }
      } else {
        return {
          ...formData,
          [e.target.name]: e.target.value 
        }
      }
    } )
  }

  // "frontUrl": https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
  // "backUrl": https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addNewPokemon(formData);
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={ handleSubmit }
      >
        <Form.Group widths="equal">
          <Form.Input fluid onChange={ handleChange } label="Name" placeholder="Name" name="name" />
          <Form.Input fluid onChange={ handleChange } label="hp" placeholder="hp" name="hp" />
          <Form.Input
            fluid
            onChange={ handleChange } 
            label="Front Image URL"
            placeholder="url"
            name="front"
          />
          <Form.Input
            fluid
            onChange={ handleChange } 
            label="Back Image URL"
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
