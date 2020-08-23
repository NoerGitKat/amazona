import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import AuthForm from "./../components/AuthForm";

import "./auth.css";

const LoginPage = ({ history }) => {
  const authState = useSelector((state) => state.authState);

  console.log("authState", authState);

  useEffect(() => {
    // If user is logged in, send them to homepage
    if (authState) {
      history.push("/");
    }
  }, [history, authState]);

  return (
    <div id="login-page" className="auth-page">
      <AuthForm isLogin={true} />
    </div>
  );
};

export default LoginPage;
