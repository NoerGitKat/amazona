import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import Product from "../components/Product";
import ProductDetails from "./../components/ProductDetails";

// Import action
import { getDetailsProduct } from "../redux/actions/product-actions";

import "./product.css";

const ProductPage = ({ match }) => {
  const productState = useSelector((state) => state.productReducer);
  const { singleProduct } = productState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailsProduct(match.params.id));
  }, []);

  return (
    <div id="product-page">
      <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back to results
      </Link>
      <Product
        id={singleProduct.id || "?"}
        name={singleProduct.name || "?"}
        image={singleProduct.image || "?"}
        brand={singleProduct.brand || "?"}
        price={singleProduct.price || "?"}
        rating={singleProduct.rating || "?"}
        numReviews={singleProduct.numReviews || "?"}
      />
      <ProductDetails price={singleProduct.price || "?"} status={"In Stock"} />
    </div>
  );
};

export default ProductPage;
