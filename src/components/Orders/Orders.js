import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "../../stateProvider";
import { db } from "../../firebase";
import SingleOrder from "./SingleOrder/SingleOrder";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("createdAt", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <SingleOrder order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
