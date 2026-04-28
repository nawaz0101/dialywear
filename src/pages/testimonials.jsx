import { testimonials } from "../data/testimonials";
import "./testimonials.css";

export default function Testimonials() {

  // ✅ SORT NEWEST → OLDEST
  const sortedTestimonials = [...testimonials].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="testimonials-page">

      {/* HEADER */}
      <section className="testimonials-header">
        <h1>What Our Customers Say</h1>
        <p>Real experiences from our valued customers</p>
      </section>

      {/* GRID */}
      <section className="testimonials-grid">
        {sortedTestimonials.map((t) => (
          <div key={t.id} className="testimonial-card">

            <h3>{t.name}</h3>
            <span className="place">{t.place}</span>

            <p className="feedback">"{t.feedback}"</p>

            <span className="date">
              {new Date(t.date).toLocaleDateString()}
            </span>

          </div>
        ))}
      </section>

    </div>
  );
}