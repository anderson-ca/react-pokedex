import React, {useState, useEffect, Fragment} from "react";
import {BounceLoader} from "react-spinners";
import {isEmpty} from "lodash";
import axios from "axios";

const PokemonDetails = ({match}) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        console.log(match.params.id);
        fetchPokemonDetails();
    }, [match.params.id])

    const fetchPokemonDetails = async () => {
        const {data} = await axios(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);
        const result = await axios(`https://pokeapi.co/api/v2/characteristic/${data.id}/`);
        console.log(result);
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
            {isEmpty(pokemon) ? (
                <BounceLoader/>
            ) : (
                <Fragment>
                    <h2>{match.params.id}</h2>
                    <img src={pokemon.picture} alt=""/>
                    <h3>{pokemon.description}</h3>
                    <h4>Height: {pokemon.height}</h4>
                    <h4>Weight: {pokemon.weight}</h4>
                </Fragment>
            )}
        </div>
    );
}

export default PokemonDetails;
