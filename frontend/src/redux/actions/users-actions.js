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
    const response = await fetch("/api/users/login", { email, password });
    const data = await response.json();

    // 2. check DB if user exists
    if (!data) {
      throw new Error("The user doesn't exist!");
    }

    // 3. Set token in localStorage
    localStorage.setItem("userInfo", data);

    // 4. Update state
    const successAction = {
      type: AUTH_SUCCESS,
      payload: data,
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
  const requestAction = {
    type: AUTH_REQUEST,
    payload: {
      email,
      password,
    },
  };

  dispatch(requestAction);

  try {
  } catch (error) {
    const errorAction = {
      type: AUTH_ERROR,
      payload: error.message,
    };
    dispatch(errorAction);
  }
};

export { login, signup };
