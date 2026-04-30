import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import "../styles/products.css";

export default function ProductGrid({ products, filters, search }) {

  // ✅ ADD THIS STATE
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products
    .filter((p) => {
      const searchTerm = search.toLowerCase();

const matchesSearch =
  p.name.toLowerCase().includes(searchTerm) ||
  String(p.id).toLowerCase().includes(searchTerm);

      const matchesCategory =
        filters.category.length === 0 ||
        filters.category.includes(p.category);

      const matchesFabric =
        filters.fabric.length === 0 ||
        filters.fabric.includes(p.fabric);

      const matchesSize =
        filters.size.length === 0 ||
        filters.size.some((s) => p.sizes.includes(s));

      const matchesPrice = p.price <= filters.price[1];

      return (
        matchesSearch &&
        matchesCategory &&
        matchesFabric &&
        matchesSize &&
        matchesPrice
      );
    });

  return (
    <>
      <h1 className="section-title">
        Explore Collections
      </h1>

      <div id="products" className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onView={() => setSelectedProduct(product)} // ✅ ADD THIS
          />
        ))}
      </div>

      {/* ✅ ADD MODAL RENDER */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}