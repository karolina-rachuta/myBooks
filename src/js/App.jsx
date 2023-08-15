// eslint-disable-next-line no-unused-vars
import React from "react";
import '../scss/main.scss'
import {HashRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Search} from "./pages/Search.jsx";
import {Login} from "./pages/Login.jsx";
import {Layout} from "./layouts/Layout.jsx";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default App
