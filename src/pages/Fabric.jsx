import "../pages/fabric.css";

/* DATA (you can move this to a separate file later) */
const fabrics = [
  {
    name: "Popcorn Fabric",
    description:
      "A textured fabric known for its lightweight feel and soft touch, perfect for everyday comfort.",
    uniqueness:
      "Breathable, stretchable, and wrinkle-resistant — ideal for casual wear.",
    image: "/fabric/popcorn.jpg",
  },
  {
    name: "Zebra Jacquard",
    description:
      "Premium woven fabric with unique patterns that add depth and style.",
    uniqueness:
      "Luxury texture with high durability and a standout visual appeal.",
    image: "/fabric/zebra.jpg",
  },
  {
    name: "Mxeno Lycra Knit",
    description:
      "Smooth knit fabric blended with lycra for flexibility and comfort.",
    uniqueness:
      "Excellent stretch, shape retention, and all-day comfort.",
    image: "/fabric/lycra.jpg",
  },

];

export default function Fabric() {
  return (
    <section className="fabric-page">
      <div className="fabric-container">
        <h1 className="fabric-title">Our Fabrics</h1>

        <div className="fabric-grid">
          {fabrics.map((fabric, index) => (
            <div className="fabric-card" key={index}>
              
              {/* IMAGE */}
              <div className="fabric-image">
                <img src={fabric.image} alt={fabric.name} />
              </div>

              {/* CONTENT */}
              <div className="fabric-content">
                <h3>{fabric.name}</h3>
                <p className="fabric-desc">{fabric.description}</p>

                <p className="fabric-unique">
                  <strong>Why it's special:</strong> {fabric.uniqueness}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}