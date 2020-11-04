import React, {useState, useEffect} from "react";
import axios from "axios";

const PokemonDetails = ({match}) => {
    let [pokemon, setPokemon] = useState({})

    useEffect(() => {
        console.log(match.params.id);
        fetchPokemonDetails();
    }, [])

    const fetchPokemonDetails = async () => {
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`);
        const result = await axios(`https://pokeapi.co/api/v2/characteristic/${data.id}/`);
        const pokemonSchema = {
            abilities: data.abilities.map(({ability}) => ability.name),
            type: data.types.map(({type}) => type.name),
            picture: `http://img.pokemondb.net/artwork/${match.params.id}.jpg`,
            description: result.data.descriptions.filter(description => description.language.name === "en")[0].description,
            weight: data.weight,
            height: data.height
        }
        setPokemon(pokemonSchema);
    }

    return (
        <div>
            <h2>{match.params.id}</h2>
            <img src={pokemon.picture} alt="pokemon picture"/>
            <h3>{pokemon.description}</h3>
        </div>
    );
}

export default PokemonDetails;
