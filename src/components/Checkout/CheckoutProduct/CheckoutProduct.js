import { Button } from "@material-ui/core";
import React from "react";
import { actionTypes } from "../../../reducer";
import { useStateValue } from "../../../stateProvider";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, image, price, ratings, hideButton }) => {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <div className="checkoutProduct" key={id}>
      <img className="checkoutProduct__image" src={image} alt="img" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__ratings">
          {Array(ratings)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <Button onClick={removeFromBasket}>Remove from basket</Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
