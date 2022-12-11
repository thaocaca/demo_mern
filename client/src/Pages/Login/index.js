import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../services/AuthService";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
//import axios from 'axios'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async () => {
    const item = { email, password };
    if (await login(item)) {
      navigate("/home");
    }
  };

  return (
    <div className="page-login">
      <form className="cover" onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>Login</h1>
        <div className="input-email">
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            {...register("email")}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <p className="errors">{errors.email?.message}</p>
        </div>
        <div className="input-password">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <p className="errors">{errors.password?.message}</p>
        </div>
        <button className="btn-login" type="submit">
          LOGIN
        </button>
        <Link to="/register" className="login-form-register">
          Register!
        </Link>
      </form>
    </div>
  );
};

export default Login;
