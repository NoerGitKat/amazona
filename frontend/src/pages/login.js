import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

const LoginPage = () => {
  return (
    <div id="login-page">
      <form onSubmit="">
        <ul className="form-container">
          <li>
            <h1>Login</h1>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange="" />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange="" />
          </li>
          <li>
            <button type="submit" className="button primary">
              Login
            </button>
          </li>
          <li>New to Amazona?</li>
          <li>
            <Link to="/register" className="button full-width">
              Create an account!
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default LoginPage;
