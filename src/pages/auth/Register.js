import React from "react";
import "./auth.scss";
import registerImg from "../../assets/register.png";
import { Link } from "react-router-dom";

import Card from "../../components/card/Card";

const Register = () => {
  return (
    <section className="container auth">
      <Card>
        <div className="form">
          <h2>Register</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className="register">
            <p>Already have an account?</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
      <div className="img">
        <img src={registerImg} alt="img" width="400" />
      </div>
    </section>
  );
};

export default Register;
