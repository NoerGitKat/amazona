import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// Import actions
import { login, signup } from "./../redux/actions/users-actions";

const AuthForm = ({ isLogin }) => {
  const INITIAL_FORM_DATA = isLogin
    ? { email: "", password: "" }
    : { name: "", email: "", password: "", password2: "" };

  const history = useHistory();

  const userState = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  useEffect(() => {
    // If user authenticated, redirect to homepage
    if (userState.token) {
      history.push("/");
    }
  }, [userState.token, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // 1. Dispatch login request
      dispatch(login(formData.email, formData.password));
    } else {
      // 1. Check if passwords match
      if (formData.password !== formData.password2) {
        alert("Passwords don't match!");
      } else {
        // 2. Dispatch action to update state
        dispatch(signup(formData.name, formData.email, formData.password));
      }
    }
  };

  const inputHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul className="form-container">
        <li>
          <h1>{isLogin ? "Login" : "Sign up"}</h1>
        </li>
        {!isLogin && (
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={inputHandler}
              required
            />
          </li>
        )}
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={inputHandler}
            required
          />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={inputHandler}
            required
          />
        </li>
        {!isLogin && (
          <li>
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              id="password2"
              placeholder="Repeat Password"
              value={formData.password2}
              onChange={inputHandler}
              required
            />
          </li>
        )}
        <li>
          <button type="submit" className="button primary">
            Login
          </button>
        </li>
        {isLogin ? <li>New to Amazona?</li> : null}
        <li>
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="button full-width"
          >
            {isLogin
              ? "Create an account!"
              : "Already have an account? Log in!"}
          </Link>
        </li>
      </ul>
    </form>
  );
};

export default AuthForm;
