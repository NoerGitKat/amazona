import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Import actions to update Redux store
import { listProducts } from "../redux/actions/product-actions";

import ProductList from "./../components/ProductList";

const HomePage = () => {
  // Get products from Redux store
  const productState = useSelector((state) => state.productReducer);
  // Allows us to make Redux aware of action execution
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch products and update Redux store
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div id="home-page">
      <h1>Home</h1>
      {productState.loading ? (
        "Loading..."
      ) : productState.error ? (
        <p>{productState.error}</p>
      ) : (
        <ProductList products={productState.products} />
      )}
    </div>
  );
};

export default HomePage;
