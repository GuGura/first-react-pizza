import React from 'react';
import Header from "./Header.jsx";
import CartOverview from "../featrues/cart/CartOverview.jsx";
import {Outlet} from "react-router-dom";

function AppLayout(props) {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    );
}

export default AppLayout;