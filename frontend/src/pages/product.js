import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

import Product from "../components/Product";
import ProductOrder from "./../components/ProductOrder";

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
        id={singleProduct.id || "N/A"}
        name={singleProduct.name || "N/A"}
        image={singleProduct.image || "N/A"}
        brand={singleProduct.brand || "N/A"}
        price={singleProduct.price || "N/A"}
        rating={singleProduct.rating || "N/A"}
        numReviews={singleProduct.numReviews || "N/A"}
      />
      <ProductOrder
        price={singleProduct.price || "N/A"}
        inStock={singleProduct.inStock}
        params={match.params}
      />
    </div>
  );
};

export default ProductPage;
