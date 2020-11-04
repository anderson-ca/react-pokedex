import React, {useState, useEffect} from "react";
import axios from "axios";

const Pokedex = () => {


    useEffect(() => {
        fetchPokemons()
    }, [])

    const fetchPokemons = async () => {
        const {data} = await axios("https://pokeapi.co/api/v2/pokemon/")
        const pokemons = data.results
        console.log(pokemons)
    }

    return (
        <div>
            <h2>This is the pokedex</h2>

        </div>
    );
}

export default Pokedex;
