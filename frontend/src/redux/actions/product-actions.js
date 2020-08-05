import {
  PRODUCT_REQUEST,
  PRODUCT_ERROR,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants";

export const listProducts = () => async (dispatch) => {
  try {
    // 1. Make Redux store aware of http request to trigger loading
    dispatch({ type: PRODUCT_REQUEST });

    // 2. Get products from server
    const response = await fetch("/api/product");
    const data = await response.json();

    // 3. Pass fetched data to store for update global state
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: PRODUCT_ERROR, payload: error.message });
    // If error pass message to Redux store
  }
};

export const getDetailsProduct = (productId) => async (dispatch) => {
  try {
    // 1. Make Redux store aware of http request to trigger loading
    dispatch({ type: PRODUCT_REQUEST });

    // 2. Get products from server
    const response = await fetch(`/api/product/${productId}`);
    const data = await response.json();

    // 3. Pass fetched data to store for update global state
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
    // If error pass message to Redux store
    dispatch({ type: PRODUCT_ERROR, payload: error.message });
  }
};
