import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Import action
import { addToCart, deleteFromCart } from "./../redux/actions/cart-actions";

import "./cart.css";

const CartPage = ({ match, location }) => {
  const { productId } = match.params;
  const { cartItems } = useSelector((state) => state.cartReducer);
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const totalQuantity =
    cartItems.length > 0 &&
    cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity;
    }, 0);

  const totalPrice =
    cartItems.length > 0 &&
    cartItems.reduce((total, currentItem) => {
      return total + currentItem.quantity * currentItem.price;
    }, 0);

  const deleteItemFromCart = (productId) => {
    dispatch(deleteFromCart(productId));
  };

  useEffect(() => {
    // After mount update product in cart based on query params
    dispatch(addToCart(productId, quantity));
  }, [dispatch, productId, quantity]);

  return (
    <div id="cart-page">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty!</div>
          ) : (
            cartItems.map((item) => (
              <li key={item.productId}>
                <div className="cart-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={`/product/${item.productId}`}>{item.name}</Link>
                  </div>
                  <div>
                    Quantity:{" "}
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <button
                      type="button"
                      className="button"
                      onClick={() => deleteItemFromCart(item.productId)}
                    >
                      Delete Item
                    </button>
                  </div>
                </div>
                <div className="cart-price">${item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-cta">
        <h3>
          Articles:{" "}
          {totalQuantity > 1
            ? `${totalQuantity} items`
            : `${totalQuantity} item`}
        </h3>
        <h4>Total: ${totalPrice}</h4>
        <button className="button primary" disabled={cartItems.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
