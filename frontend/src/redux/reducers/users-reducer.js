import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR } from "./../constants";

const INITIAL_USERS_STATE = { token: "" };

const usersReducer = (state = INITIAL_USERS_STATE, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, loading: true };
    case AUTH_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case AUTH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
