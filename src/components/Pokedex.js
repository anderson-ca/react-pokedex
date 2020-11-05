import React, {useState, useEffect, Fragment} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const Pokedex = () => {
    let [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    }, [])

    const fetchPokemons = async () => {
        const {data} = await axios("https://pokeapi.co/api/v2/pokemon/");
        const pokemons = data.results;
        console.log(pokemons);
        setPokemons(pokemons);
    }

    return (
        <div id="pokedex-container">
            {pokemons.map(({name}) => (
                <div className="pokemon-card" key={name}>
                    <h2>
                        <Link to={`/pokemon/${name}`}>{name}</Link>
                    </h2>
                    <img className="pokemon-img-card" src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Pokedex;
