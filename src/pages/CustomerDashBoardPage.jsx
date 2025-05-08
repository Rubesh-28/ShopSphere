import React from "react";

export default function CustomerDashboardPage() {
  return (
    <div className="container">
      <h1>My Dashboard</h1>
      <section className="dashboard-section">
        <h2>Recent Orders</h2>
        <p>(Show order cards with status here)</p>
      </section>
      <section className="dashboard-section">
        <h2>Profile Info</h2>
        <p>(Editable form for profile and address)</p>
      </section>
    </div>
  );
}