import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./../constants";

const INITIAL_CART_STATE = { cartItems: [] };

const cartReducer = (state = INITIAL_CART_STATE, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const newProduct = action.payload;
      // Find product in state by id
      const product = state.cartItems.find(
        (cartItem) => cartItem.productId === newProduct.productId
      );
      if (product) {
        // If product already exists, update quantity. Else, keep quantity.
        const newCartItems = state.cartItems.map((cartItem) =>
          cartItem.productId === product.productId ? newProduct : cartItem
        );
        return { ...state, cartItems: newCartItems };
      } else {
        // Add the new product to cart
        return { ...state, cartItems: [...state.cartItems, newProduct] };
      }
    case CART_REMOVE_ITEM:
      // Filter out product from cartItems by checking productId
      const filteredCartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );
      return { ...state, cartItems: filteredCartItems };
    default:
      return state;
  }
};

export default cartReducer;
