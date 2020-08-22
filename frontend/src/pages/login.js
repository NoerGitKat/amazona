import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import AuthForm from "./../components/AuthForm";

import "./auth.css";

const LoginPage = ({ history }) => {
  const userState = useSelector((state) => state.usersReducer);

  useEffect(() => {
    // If user is logged in, send them to homepage
    if (userState.token.name) {
      history.push("/");
    }
  }, [history, userState.token.name]);

  return (
    <div id="login-page" className="auth-page">
      <AuthForm isLogin={true} />
    </div>
  );
};

export default LoginPage;
