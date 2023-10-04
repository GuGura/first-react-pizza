import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu, { loader as menuLoader } from './featrues/menu/Menu.jsx';
import Cart from './featrues/cart/Cart.jsx';
import Order, { loader as orderLoader } from './featrues/order/Order.jsx';
import CreateOrder, {
  action as createOrderAction,
} from './featrues/order/CreateOrder.jsx';
import AppLayout from './ui/AppLayout.jsx';
import Error from './ui/Error.jsx';
import Home from './ui/Home.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import { action as updateOrderAction } from './featrues/order/UpdateOrder.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App(props) {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
