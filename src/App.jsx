import './App.css'

export default function App() {
  return (
    <div className="site">

      <nav className="navbar">
        <h1>Drip City Detailing</h1>
        <a href="#pricing">Pricing</a>
      </nav>

      <section className="hero">
        <div className="overlay">
          <h2>Premium Mobile Car Detailing In Houston</h2>

          <p>
            Interior detailing, exterior washes, seat shampooing,
            odor removal, ceramic spray protection, and full deep cleans.
          </p>

          <a className="cta" href="tel:8328986091">
            Call Now
          </a>
        </div>
      </section>

      <section className="services">
        <h3>Our Services</h3>

<div className="cards">

  <div className="card">
    <h4>Basic Detail</h4>
    <p>
      Exterior hand wash, tire cleaning, windows cleaned,
      light interior wipe down, and quick vacuum.
    </p>
    <span>$149</span>

    <div className="service-icon">🚘</div>

    <a className="book-btn" href="tel:8328986091">
  
  Book Now
</a>
  </div>

  <div className="card">
    <h4>Interior Deep Clean</h4>
    <p>
      Deep vacuum, seat shampooing, stain treatment,
      odor removal, plastics wiped down, and interior surfaces restored.
    </p>
    <span>$249</span>

    <div className="service-icon">🪑</div>

    <a className="book-btn" href="tel:8328986091">
  
  Book Now
</a>
  </div>

  <div className="card">
    <h4>Full Premium Detail</h4>
    <p>
      Complete interior deep clean plus exterior hand wash,
      tire shine, windows, wax protection, and final wipe down.
    </p>
    <span>$349</span>

    <div className="service-icon">💎</div>

    <a className="book-btn" href="tel:8328986091">
  
  Book Now
</a>
  </div>

</div>
      </section>

      <section id="pricing" className="why">
        <h3>Why Choose Us?</h3>

        <ul>
          <li>Mobile service anywhere in Houston</li>
          <li>Same day appointments available</li>
          <li>Professional products and equipment</li>
          <li>Fast response times</li>
          <li>Satisfaction guaranteed</li>
        </ul>
      </section>

      <section className="contact">
        <h3>Book Your Detail Today</h3>

        <p>
          Call or text now for a free quote.
        </p>

        <a className="cta" href="tel:8328986091">
          (832) 898-6091
        </a>
      </section>

    </div>
  )
}