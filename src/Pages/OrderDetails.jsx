import React, { useEffect, useState } from "react";
import Navbar2 from "../Components/Navbar2";
import axios from "axios";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);

  const userId = localStorage.getItem("id");

  useEffect(() => {
    fetchOrders();
  }, []);

  async function fetchOrders() {
    try {
      const res = await axios.get(
        `http://localhost:3000/orders?userId=${userId}`
      );

      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function increase(order) {
    const updated = {
      ...order,
      quantity: order.quantity + 1,
      total: (order.quantity + 1) * Number(order.productPrice),
    };

    await axios.put(
      `http://localhost:3000/orders/${order.id}`,
      updated
    );

    fetchOrders();
  }

  async function decrease(order) {
    if (order.quantity <= 1) return;

    const updated = {
      ...order,
      quantity: order.quantity - 1,
      total: (order.quantity - 1) * Number(order.productPrice),
    };

    await axios.put(
      `http://localhost:3000/orders/${order.id}`,
      updated
    );

    fetchOrders();
  }

  async function cancelOrder(id) {
    await axios.delete(
      `http://localhost:3000/orders/${id}`
    );

    toast.success("Order Removed");
    fetchOrders();
  }

  return (
    <>
      <Navbar2 />

      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>
          My Orders
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 0 10px gray",
                textAlign: "center",
              }}
            >
              <img
                src={order.productImage}
                alt=""
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
              />

              <h2>{order.productName}</h2>

              <h3>
                ₹{order.productPrice}
              </h3>

              <p>
                Address:
                <br />
                {order.address}
              </p>

              <div>
                <button
                  onClick={() => decrease(order)}
                >
                  -
                </button>

                <span
                  style={{
                    margin: "0 15px",
                  }}
                >
                  {order.quantity}
                </span>

                <button
                  onClick={() => increase(order)}
                >
                  +
                </button>
              </div>

              <h3>
                Total : ₹{order.total}
              </h3>

              <button
                onClick={() =>
                  cancelOrder(order.id)
                }
              >
                Cancel Order
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderDetails;