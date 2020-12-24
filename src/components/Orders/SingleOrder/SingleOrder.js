import React from "react";
import "./SingleOrder.css";
import moment from "moment";
import CheckoutProduct from "../../Checkout/CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const SingleOrder = ({ order }) => {
  const date = new Date(order.data.createdAt);
  console.log();

  return (
    <div className="singleOrder">
      <h2>Order</h2>
      <p>{moment(date).format("MMMM Do YYYY, h:mma")}</p>
      <p className="singleOrder__id">
        <small>{order?.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          ratings={item.ratings}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="singleOrder__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data?.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default SingleOrder;
