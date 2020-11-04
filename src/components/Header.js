import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Header Component</h2>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/pokedex">Pokemon Index</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
