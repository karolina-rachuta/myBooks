import {NavLink} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Header = ({logged, name}) => {

    return (
        <header className="container">
            <nav className="navbar">
                <h1 className="logo">
                    <i className="fa-solid fa-bookmark"></i> My Books
                </h1>
                <ul className="menu">
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) => isActive ? 'activeStyle' : undefined}>
                            Home</NavLink>
                    </li>
                    {logged ?
                        null
                        : <li>
                            <NavLink
                                to="/login"
                                className={({isActive}) => isActive ? 'activeStyle' : undefined}>Login</NavLink>
                        </li>}

                    {logged ?
                        <li>
                            <NavLink
                                to="/search"
                                className={({isActive}) => isActive ? 'activeStyle' : undefined}>Search&Books</NavLink>
                        </li>
                        : null}
                    {logged && <li><h3 style={{color: "#EAB2A0"}}>Hello, {name}!</h3></li>}
                </ul>
            </nav>
        </header>
    )
}
