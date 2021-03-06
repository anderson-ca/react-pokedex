import React from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Pokedex from "./components/Pokedex";
import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";

function App() {
    return (
        <div id="app-container">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/pokedex" component={Pokedex}/>
                <Route path="/pokemon/:id" component={PokemonDetails}/>
            </Switch>
        </div>
    );
}

export default App;
