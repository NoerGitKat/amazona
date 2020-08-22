import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from "../constants";

const login = (email, password) => async (dispatch) => {
  // 1. Make store aware of login request
  const requestAction = {
    type: AUTH_REQUEST,
    payload: {
      email,
      password,
    },
  };

  dispatch(requestAction);

  try {
    // 1. Fetch user data based on form input
    const requestBody = JSON.stringify({ email, password });
    const requestHeaders = { "Content-Type": "application/json" };
    const request = {
      method: "POST",
      body: requestBody,
      headers: requestHeaders,
    };

    const response = await fetch("/api/users/login", request);
    const token = await response.json();

    // 2. check DB if user exists
    if (!token) {
      throw new Error("The user doesn't exist!");
    }

    // 3. Set token in localStorage
    localStorage.setItem("token", token);

    // 4. Update state
    const successAction = {
      type: AUTH_SUCCESS,
      payload: token,
    };

    dispatch(successAction);
  } catch (error) {
    const errorAction = {
      type: AUTH_ERROR,
      payload: error.message,
    };
    dispatch(errorAction);
  }
};

const signup = (name, email, password) => async (dispatch) => {
  // 1. Make store aware of signup request
  const requestAction = {
    type: AUTH_REQUEST,
    payload: {
      email,
      password,
    },
  };

  dispatch(requestAction);

  try {
    // 2. Send HTTP Post request to server
    const requestBody = JSON.stringify({ name, email, password });
    const requestHeaders = { "Content-Type": "application/json" };
    const request = {
      method: "POST",
      body: requestBody,
      headers: requestHeaders,
    };

    const response = await fetch("/api/users/signup", request);
    const token = await response.json();

    // 3. Set token in localStorage
    localStorage.setItem("token", token);

    // 4. Update Redux store with success
    const successAction = {
      type: AUTH_ERROR,
      payload: token,
    };

    dispatch(successAction);
  } catch (error) {
    const errorAction = {
      type: AUTH_ERROR,
      payload: error.message,
    };
    dispatch(errorAction);
  }
};

export { login, signup };
