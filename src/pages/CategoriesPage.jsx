import { useNavigate } from "react-router-dom";
import "../pages/categoriespage.css";

const categories = [
  {
    name: "Round Neck Shirts",
    desc: "Everyday essential wear",
    image: "/catPage pics/rn.png",
  },
  {
    name: "Drop Down  Shoulder",
    desc: "Relaxed street style",
    image: "/catPage pics/ds.png",
  },
  {
    name: "T Shirts (Collar)",
    desc: "Smart casual fits",
    image: "/catPage pics/ts.png",
  },
  {
    name: "Track Pants",
    desc: "Comfort meets performance",
    image: "/catPage pics/fs.png",
  },
  {
    name: "Combos",
    desc: "Value packs curated for you",
    image: "/catPage pics/cb.png",
  },
];

export default function CategoriesPage() {
  const navigate = useNavigate();

  const handleClick = (category) => {
    // Navigate to home with category filter
    navigate(`/?category=${encodeURIComponent(category)}#products`);
  };

  return (
    <section className="categories-page">
      <h1 className="page-title">Explore Categories</h1>

      <div className="categories-grid">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleClick(cat.name)}
          >
            {/* IMAGE */}
            <div className="card-image">
              <img src={cat.image} alt={cat.name} />
            </div>

            {/* OVERLAY */}
            <div className="card-overlay">
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}