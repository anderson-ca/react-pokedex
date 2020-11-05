import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {BounceLoader} from "react-spinners";
import axios from "axios";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        fetchPokemons();
    }, [])

    const fetchPokemons = async () => {
        setIsLoading(true)
        setIsError(false)

        try {
            const {data} = await axios("https://pokeapi.co/api/v2/pokemon/?limit=60");
            setPokemons(data.results);
            setIsLoading(false)
        } catch (error) {
            setIsError(true)
        }

    }

    return (
        <div id="pokedex-container">
            {isError && <iframe src="https://giphy.com/embed/rAm0u2k17rM3e" width="480" height="336" frameBorder="0"
                                className="giphy-embed"
                                allowFullScreen/>}
            {isLoading && !isError ? (
                <BounceLoader/>
            ) : (
                pokemons.map(({name}) => (
                    <div key={name}>
                        <h2><Link to={`/pokemon/${name}`}>{name}</Link></h2>
                        <img className="pokemon-img-card" src={`https://img.pokemondb.net/artwork/${name}.jpg`} alt=""/>
                    </div>
                ))
            )}
        </div>
    );
}

export default Pokedex;
