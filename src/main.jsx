import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import MenuPages from './component/MenuPages/MenuPages';
import OurShopePage from './component/OurShopePage/OurShopePage';
import ContactPage from './component/ContactPage/ContactPage';
import AuthProvider from './component/providers/AuthProvider';
import Register from './component/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/menu',
        element: <MenuPages></MenuPages>
      },
      {
        path: '/shope',
        element: <OurShopePage></OurShopePage>
      },
      {
        path: '/contact',
        element: <ContactPage></ContactPage>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
