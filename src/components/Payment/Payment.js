import React, { useState } from "react";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import { actionTypes, getBasketTotal } from "../../reducer";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct/CheckoutProduct";
import { db } from "../../firebase";
import { v4 as uuidv4 } from "uuid";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSucceeded(true);

    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(uuidv4())
      .set({
        basket: basket,
        amount: getBasketTotal(basket),
        createdAt: Date.now(),
      })
      .then((response) => {
        setSucceeded(false);
        setError(null);
      })
      .catch((err) => setError(err));

    dispatch({
      type: actionTypes.EMPTY_BASKET,
    });

    history.replace("/orders");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                ratings={item.ratings}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  onClick={handleSubmit}
                  disabled={succeeded || basket.length <= 0 || !user}
                >
                  <span>{succeeded ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
