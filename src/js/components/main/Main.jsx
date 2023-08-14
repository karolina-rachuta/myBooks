import {Outlet} from "react-router-dom";
import React from "react";

export const Main = () => {
    return (
        <main className="container container__main">
            <Outlet/>
        </main>
    )
}
