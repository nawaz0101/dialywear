import { useState } from "react";

export default function ProductModal({ product, onClose }) {
  const [activeImg, setActiveImg] = useState(product.images[0]);
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

    const phoneNumber = "917353364410"; // replace

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        
        {/* CLOSE */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* LEFT: IMAGE GALLERY */}
        <div className="modal-gallery">
          <img className="main-img" src={activeImg} alt="" />

          <div className="thumbs">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={activeImg === img ? "active" : ""}
                onClick={() => setActiveImg(img)}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="modal-details">
          <h2>{product.name}</h2>
          <p className="modal-desc">{product.description}</p>

          <p className="modal-price">₹{product.price}</p>

          <p className="fabric-name">Fabric: {product.fabric}</p>

          {/* SIZE SELECT */}
          <div className="modal-sizes">
            <h4 className="size-heading">Select Size</h4>
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
          </div>

          {/* ACTION */}
          <button className="modal-order" onClick={handleOrder}>
            Order on WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
}