import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import './styles.scss';

const NavBar = () => {

    return (
        <ul className="navbar">
            <li>
                <Link className="logo" to="/">SUPERCODER</Link>
            </li>
            <li>
                <Link className="li-navbar" to="/category/aguas">Aguas</Link>
            </li>
            <li>
                <Link className="li-navbar" to="/category/gaseosas">Gaseosas</Link>
            </li>
            <li>
                <Link className="li-navbar" to="/category/bebidas-blancas">Bebidas Blancas</Link>
            </li>
            <CartWidget />
        </ul>
    );
};

export default NavBar;
