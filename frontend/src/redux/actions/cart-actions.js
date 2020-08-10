import { CART_ADD_ITEM } from "./../constants";

const addToCart = (productId, quantity) => async (dispatch) => {
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
  } catch (error) {
    console.error(error);
  }
};

export { addToCart };
