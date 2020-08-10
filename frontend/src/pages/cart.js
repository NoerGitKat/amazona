import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import action
import { addToCart } from "./../redux/actions/cart-actions";

const CartPage = ({ match, location }) => {
  const { productId } = match.params;
  const cartState = useSelector((state) => state.cartReducer);
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    // After mount update product in cart based on query params
    dispatch(addToCart(productId, quantity));
  }, [dispatch, productId, quantity]);

  return <div>Cart Page!</div>;
};

export default CartPage;
