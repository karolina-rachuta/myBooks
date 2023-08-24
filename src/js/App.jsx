// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from "react";
import '../scss/main.scss'
import {HashRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Search} from "./pages/Search.jsx";
import {Login} from "./pages/Login.jsx";
import {Layout} from "./layouts/Layout.jsx";

const App = () => {
    const [name, setName] = useState(null);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('name')) {
            setName(localStorage.getItem('name'));
        }
    }, []);

    function handleNameAdd(event) {
        localStorage.setItem('name', event.target.previousElementSibling.value);
        setName(event.target.previousElementSibling.value);
        setLogged(true);
    }

    useEffect(() => {
        setLogged(name !== null);
    }, [name]);
    // localStorage.removeItem('name');
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout logged={logged} name={name}/>}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login name={name} logged={logged} handleNameAdd={handleNameAdd} />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default App
