import {
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_REQUEST,
  PRODUCT_ERROR,
} from "../constants";

const INITIAL_PRODUCT_STATE = {
  products: [],
  singleProduct: {},
};

const productReducer = (state = INITIAL_PRODUCT_STATE, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, singleProduct: action.payload };
    default:
      return state;
  }
};

export default productReducer;
