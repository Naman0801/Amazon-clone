import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../../stateProvider";
import { getBasketTotal } from "../../../reducer";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} {basket.length > 1 ? "items" : "item"}):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <Button
        disabled={basket.length <= 0 || !user}
        onClick={(e) => history.push("/payment")}
      >
        {user ? "Proceed to Checkout" : "Please SignIn to Checkout"}
      </Button>
    </div>
  );
};

export default Subtotal;
