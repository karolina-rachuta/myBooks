import {Outlet} from "react-router-dom";

export const Main = () => {
    return (
        <main className="container container__main">
            <Outlet/>
        </main>
    )
}
