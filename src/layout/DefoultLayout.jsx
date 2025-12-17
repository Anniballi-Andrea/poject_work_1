import { Outlet } from "react-router-dom";
import Header from "../component/Header";
export default function DefoultLayout() {

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>


        </>

    )
}