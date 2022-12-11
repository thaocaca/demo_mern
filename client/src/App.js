import React from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import DefaultLayout from "./Pages/DefaultLayout/DefaultLayout";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Product from "./Pages/Product/Product";
import ChangePassword from "./components/ChangePassword/ChangePassword";

function App() {
  let element = useRoutes([
    {
      path: "home",
      element: <DefaultLayout />,
      children: [
        {
          path: "product",
          element: <Product />,
        },
        { path: "dashboard", element: <Dashboard /> },
        { path: "changepassword", element: <ChangePassword />}
      ],
    },
    { path: "/", element: <Login /> },
    { path: "Register", element: <Register /> },
   
  ]);

  return element;
 
}

export default App;
