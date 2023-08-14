import {NavLink} from "react-router-dom";
import React from "react";

export const Header = () => {
    return (
        <header className="container">
            <nav className="navbar">
                <h1 className="logo">
                    <i className="fa-solid fa-bookmark"></i> My Books
                </h1>
                <ul className="menu">
                    <li>
                        <NavLink
                            to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/search">Search</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/books">Books</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
