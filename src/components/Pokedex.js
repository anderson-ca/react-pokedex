import React, {useState, useEffect, Fragment} from "react";
import {Link} from "react-router-dom";
import {BounceLoader} from "react-spinners";
import axios from "axios";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        fetchPokemons();

        return () => {
            // clean up method
        }
    }, [])

    const fetchPokemons = async () => {
        setIsLoading(true)
        setIsError(false)

        try {
            const {data, status} = await axios("https://pokeapi.co/api/v2/pokemon/?limit=10");

            // data I need in order to create pagination
            console.log(status) // api call status
            console.log(data.count) // number of pokemon(elements)
            console.log(data.next) // next page URL
            console.log(data.results) // elements in current page

            setPokemons(data.results);
            setIsLoading(false)
        } catch (error) {
            setIsError(true)
        }

    }

    return (

        <Fragment>
            <div>
                <h1>Number of pages - </h1>
            </div>
            <div id="pokedex-container">
                {isError &&
                <iframe title="error giphy" src="https://giphy.com/embed/rAm0u2k17rM3e" width="480" height="336"
                        frameBorder="0"
                        className="giphy-embed"
                        allowFullScreen/>}
                {isLoading && !isError ? (
                    <BounceLoader/>
                ) : (
                    pokemons.map(({name}) => (
                        <div key={name}>
                            <h2><Link to={`/pokemon/${name}`}>{name}</Link></h2>
                            <img className="pokemon-img-card" src={`https://img.pokemondb.net/artwork/${name}.jpg`}
                                 alt=""/>
                        </div>
                    ))
                )}
            </div>
        </Fragment>
    );
}

export default Pokedex;
