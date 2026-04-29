import { useState } from "react";
import "../styles/filter.css";

export default function Filter({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  // Handle multi-select (category, type, size)
  const toggleMulti = (key, value) => {
    setFilters((prev) => {
      const exists = prev[key].includes(value);

      return {
        ...prev,
        [key]: exists
          ? prev[key].filter((item) => item !== value)
          : [...prev[key], value],
      };
    });
  };

  const removeFilter = (key, value) => {
  setFilters((prev) => ({
    ...prev,
    [key]: prev[key].filter((item) => item !== value),
  }));
};

const resetPrice = () => {
  setFilters((prev) => ({
    ...prev,
    price: [300, 1000],
  }));
};

  return (
    <>
      {/* MOBILE FILTER BUTTON */}
      <button className="filter-btn" onClick={() => setOpen(true)}>
        Filter
      </button>

      {/* OVERLAY (MOBILE) */}
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* FILTER PANEL */}
      <aside className={`filter ${open ? "open" : ""}`}>
        {/* HEADER */}
        <div className="filter-header">
          <h2>Filters</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* CATEGORY */}
        <div className="filter-group">
          <h4>Category</h4>
          {[
            "Round Neck Shirts",
            "Down Shoulder",
            "T Shirts (Collar)",
            "Track Pants",
            "Combos",
          ].map((c) => (
            <label key={c}>
              <input
                type="checkbox"
                checked={filters.category.includes(c)}
                onChange={() => toggleMulti("category", c)}
              />
              {c}
            </label>
          ))}
        </div>

        {/* TYPE */}
        <div className="filter-group">
          <h4>Fabric</h4>
          {["Popcorn", "Zebra Jacquard", "Mxeno Lycra Knit"].map((t) => (
            <label key={t}>
              <input
                type="checkbox"
                checked={filters.fabric.includes(t)}
                onChange={() => toggleMulti("fabric", t)}
              />
              {t}
            </label>
          ))}
        </div>

        {/* PRICE */}
        <div className="filter-group">
          <h4>Price</h4>
          <input
            type="range"
            min="300"
            max="1000"
            value={filters.price[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                price: [0, Number(e.target.value)],
              }))
            }
          />
          <p>₹300 - ₹{filters.price[1]}</p>
        </div>

        {/* SIZE */}
        <div className="filter-group">
          <h4>Size</h4>
          <div className="sizes">
            {["S", "M", "L", "XL", "XXL"].map((s) => (
              <button
                key={s}
                className={filters.size.includes(s) ? "active" : ""}
                onClick={() => toggleMulti("size", s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* SORT */}
        <div className="filter-group">
          <h4>Sort By</h4>
          <select
            value={filters.sort}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, sort: e.target.value }))
            }
          >
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>

       
          <div className="active-filters">
  
  {/* CATEGORY */}
  {filters.category.map((c) => (
    <span key={c} onClick={() => removeFilter("category", c)}>
      {c} ✕
    </span>
  ))}

  {/* FABRIC */}
  {filters.fabric.map((f) => (
    <span key={f} onClick={() => removeFilter("fabric", f)}>
      {f} ✕
    </span>
  ))}

  {/* SIZE */}
  {filters.size.map((s) => (
    <span key={s} onClick={() => removeFilter("size", s)}>
      {s} ✕
    </span>
  ))}

  {/* PRICE */}
  {filters.price[1] !== 1000 && (
    <span onClick={() => resetPrice()}>
      Under ₹{filters.price[1]} ✕
    </span>
  )}

</div>
 {/* ACTIONS */}
        <div className="filter-actions">
          <button
            className="clear"
            onClick={() =>
              setFilters({
                category: [],
                fabric: [],
                size: [],
                price: [300, 1000],
                sort: "",
              })
            }
          >
            Clear All
          </button>
        </div>
      </aside>
    </>
  );
}
