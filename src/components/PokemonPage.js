import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect( () => {
    fetch('http://localhost:3001/pokemon')
      .then( res => res.json() )
      .then( setPokemonList )
  }, [])

  const pokemonToDisplay = pokemonList.filter( pokemon => {
    return pokemon.name.toLowerCase().includes( searchQuery.toLowerCase() )
    } )

  const addNewPokemon = (pokemonToAdd) => {
    fetch(`http://localhost:3001/pokemon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pokemonToAdd)
    })
      .then( res => res.json() )
      .then( newPokemon => setPokemonList( oldList => [ newPokemon, ...oldList ]) )
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={ addNewPokemon } />
      <br />
      <Search searchQuery={ searchQuery } setSearchQuery={ setSearchQuery } />
      <br />
      <PokemonCollection pokemonList={ pokemonToDisplay } />
    </Container>
  );
}

export default PokemonPage;
