import {
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_REQUEST,
} from "../constants";

const INITIAL_PRODUCT_STATE = {
  products: [],
};

const productReducer = (state = INITIAL_PRODUCT_STATE, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
