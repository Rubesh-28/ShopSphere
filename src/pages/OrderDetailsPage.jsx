import React from "react";
import { useParams } from "react-router-dom";

export default function OrderDetailsPage() {
  const { orderId } = useParams();

  return (
    <div className="container">
      <h1>Order Details</h1>
      <p>Order ID: {orderId}</p>
      <div>
        <p>(Show ordered items, shipping info, total amount, etc.)</p>
      </div>
    </div>
  );
}
