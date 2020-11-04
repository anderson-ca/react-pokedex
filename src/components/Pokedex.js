import React, {useState, useEffect} from "react";
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
        <div>
            <h2>This is the pokedex</h2>
            {pokemons.map(({name}) => (
                <div key={name}>
                    <h2>
                        <Link to={`/pokemon/${name}`}>{name}</Link>
                    </h2>
                    <img src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt="pokemon picture"/>
                </div>
            ))}
        </div>
    );
}

export default Pokedex;
