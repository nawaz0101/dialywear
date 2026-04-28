import { useState } from "react";

export default function ProductCard({ product , onView }) {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleOrder = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const message = `Hi, I want to order:

Product ID: ${product.id}
Name: ${product.name}
Category: ${product.category}
Fabric: ${product.fabric}
Size: ${selectedSize}
Price: ₹${product.price}`;

    const phoneNumber = "917353364410"; // replace with your number

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="product-card">
      
      {/* IMAGE */}
      <div className="product-image">
        <img src={product.images[0]} alt={product.name} />
      </div>

      {/* INFO */}
      <div className="product-info">
        <h3>{product.name}</h3>

        {/* SIZE SELECT */}
        <div className="sizes">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={selectedSize === size ? "active" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        {/* PRICE */}
        <p className="price">₹{product.price}</p>

        {/* ACTIONS */}
        <div className="actions">
          <button className="order-btn" onClick={handleOrder}>
            Order
          </button>

          <button className="view-btn" onClick={onView}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}