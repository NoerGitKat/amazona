import React from "react";

import AuthForm from "./../components/AuthForm";

const SignupPage = () => {
  return (
    <div id="signup-page" className="auth-page">
      <AuthForm isLogin={false} />
    </div>
  );
};

export default SignupPage;
