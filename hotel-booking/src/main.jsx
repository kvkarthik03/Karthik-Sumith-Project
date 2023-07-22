import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AboutUs from './AboutUs.jsx';
import Login from './login.jsx';
import SignUp from './signup.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "aboutus",
    element: <AboutUs/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "signup",
    element: <SignUp/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
);
