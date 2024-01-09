import React from "react";
import "./auth.scss";
import resetImg from "../../assets/forgot.png";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";

const Reset = () => {
  return (
    <section className="container auth">
      <div className="img">
        <img src={resetImg} alt="img" width="400" />
      </div>
      <Card>
        <div className="form">
          <h2>Reset Password</h2>
          <form>
            <input type="email" placeholder="Email" required />

            <button className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className="links">
              <p>
                <Link to="/login">- Login</Link>
              </p>
              <p>
                <Link to="/register">- Register</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </section>
  );
};

export default Reset;
