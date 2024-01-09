import React from "react";
import "./auth.scss";
import loginImg from "../../assets/login.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";

const Login = () => {
  return (
    <section className="container auth">
      <div className="img">
        <img src={loginImg} alt="img" width="400" />
      </div>
      <Card>
        <div className="form">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className="links">
              <Link to="/reset">Reset Password</Link>
            </div>
            <p> -- or -- </p>
          </form>
          <button className="--btn --btn-danger --btn-block">
            <FaGoogle color="#fff" />
            -Login With Google
          </button>
          <span className="register">
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
};

export default Login;
