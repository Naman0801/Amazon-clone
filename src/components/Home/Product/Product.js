import React from "react";
import "./Product.css";
import { useStateValue } from "../../../stateProvider";
import { actionTypes } from "../../../reducer";

const Product = ({ id, title, image, price, ratings }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        title,
        image,
        price,
        ratings,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <h3>{title}</h3>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="img" className="product__image" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
};

export default Product;
