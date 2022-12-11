import { Button } from "antd";
import Login from "../Login";
import Register from "../Register";
import {  Route, Routes } from "react-router-dom";
import "./style.scss";

const Home = () => {
  return (
    <div className="main">
      <div className="nav">
        <div className="logo">Logo</div>
        <div className="login" href = "/login">Login</div>
        <div className="register">Register</div>
      </div>
      <div className="content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
