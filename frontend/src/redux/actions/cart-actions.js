import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "./../constants";

const addToCart = (productId, quantity) => async (dispatch, getState) => {
  try {
    // 1. Get product details based on id
    const response = await fetch(`/api/product/${productId}`);
    const data = await response.json();

    // 2. Create action
    const action = {
      type: CART_ADD_ITEM,
      payload: {
        productId: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        inStock: data.inStock,
        quantity,
      },
    };

    // 3. Make Redux store aware of action, including new data
    dispatch(action);

    // 4. Get cartItems state
    const {
      cartReducer: { cartItems },
    } = getState();

    // 5. Store cartItems in localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } catch (error) {
    console.error(error);
  }
};

const deleteFromCart = (productId) => async (dispatch) => {
  try {
    // 1. Dispatch action with productId
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });

    // 2. Remove from  localStorage
    localStorage.removeItem("cartItems");
  } catch (error) {
    console.error(error);
  }
};

export { addToCart, deleteFromCart };
