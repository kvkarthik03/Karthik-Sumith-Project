import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ContactUs from './ContactUs.jsx';
import Login from './login.jsx';
import SignUp from './signup.jsx';
import Rooms from './Rooms.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "contactus",
    element: <ContactUs/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "signup",
    element: <SignUp/>
  },
  {
    path: "rooms",
    element: <Rooms/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <RouterProvider router={router} />
);
