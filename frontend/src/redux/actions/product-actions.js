import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_ERROR,
} from "../constants";

export const listProducts = () => async (dispatch) => {
  try {
    // 1. Make Redux store aware of http request to trigger loading
    dispatch({ type: PRODUCT_LIST_REQUEST });

    // 2. Get products from server
    const response = await fetch("/api/product");
    const data = await response.json();

    // 3. Pass fetched data to store for update global state
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    // If error pass message to Redux store
    dispatch({ type: PRODUCT_LIST_ERROR, payload: error.message });
  }
};
