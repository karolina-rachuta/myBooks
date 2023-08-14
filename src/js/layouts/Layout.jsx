import React from 'react';
import {Header} from "../components/header/Header.jsx";
import {Main} from "../components/main/Main.jsx";
import {Footer} from "../components/footer/Footer.jsx";

export const Layout = () => {
    return <>
        <Header/>
        <Main/>
        <Footer/>
    </>
}