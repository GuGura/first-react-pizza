import React, {lazy} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Menu, {loader as menuLoader} from "./featrues/menu/Menu.jsx";
import Cart from "./featrues/cart/Cart.jsx";
import Order from "./featrues/order/Order.jsx";
import CreateOrder from "./featrues/order/CreateOrder.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx";

const Home = lazy(() => import("./ui/Home.jsx"))

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {path: '/', element: <Home/>},
            {
                path: '/menu',
                element: <Menu/>,
                loader: menuLoader,
                errorElement: <Error/>,
            },
            {path: '/cart', element: <Cart/>},
            {path: '/order/new', element: <CreateOrder/>},
            {path: '/order/:orderId', element: <Order/>},
        ]
    },

])

function App(props) {
    return <RouterProvider router={router}/>
}

export default App;