import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Header Component</h2>
            <nav>
                <ul>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/About"></Link></li>
                    <li><Link to="/index"></Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
