import React from 'react';
import {Header} from "../components/header/Header.jsx";
import {Main} from "../components/main/Main.jsx";
import {Footer} from "../components/footer/Footer.jsx";

// eslint-disable-next-line react/prop-types
export const Layout = ({logged, name}) => {
    return <>
        {/* eslint-disable-next-line no-undef */}
        <Header logged={logged} name={name}/>
        <Main/>
        <Footer/>
    </>
}