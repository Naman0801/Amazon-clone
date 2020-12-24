import React from "react";
import { useStateValue } from "../../stateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_LP_Hero_HolidayDeals_en_US.png"
          alt="ad"
        />

        <div>
          {user && <h3 className="checkout__user">Hello, {user?.email}</h3>}
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((b) => (
            <CheckoutProduct
              key={b.id}
              id={b.id}
              price={b.price}
              ratings={b.ratings}
              title={b.title}
              image={b.image}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
