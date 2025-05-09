function navigateToAddProduct() {
  window.location.href = "/vendor/add-product";
}
export default function ProductManagerPage() {
  return (
    <div className="container product-manager-page">
      <h1>Manage Products</h1>
      <button className="btn add-product-btn" onClick={navigateToAddProduct}>+ Add New Product</button>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="/images/sample.jpg" alt="product" className="product-thumb" /></td>
            <td>Wireless Mouse</td>
            <td>Electronics</td>
            <td>₹599</td>
            <td>35</td>
            <td>
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td><img src="/images/sample2.jpg" alt="product" className="product-thumb" /></td>
            <td>Running Shoes</td>
            <td>Footwear</td>
            <td>₹1499</td>
            <td>20</td>
            <td>
              <button className="btn edit-btn">Edit</button>
              <button className="btn delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
