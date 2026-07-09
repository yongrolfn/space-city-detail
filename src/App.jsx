import './App.css'

export default function App() {
  return (
    <div className="site">

      <nav className="navbar">
        <h1>Drip City Detailing</h1>
        <div>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Book</a>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay">
          <p className="tagline">Mobile Detailing • Houston, TX</p>
          <h2>Make Your Car Look Brand New Again</h2>
          <p>
            Interior deep cleans, exterior washes, seat shampooing, odor removal,
            ceramic spray protection, and full premium details brought straight to you.
          </p>

          <div className="hero-buttons">
            <a className="cta" href="tel:8328986091">Call Now</a>
            <a className="secondary-btn" href="#pricing">View Prices</a>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <p className="section-label">What We Offer</p>
        <h3>Detailing Packages</h3>

        <div className="cards">

          <div className="card">
            <div className="service-icon">🚘</div>
            <h4>Basic Detail</h4>
            <p>
              Exterior hand wash, tire cleaning, windows cleaned,
              light interior wipe down, and quick vacuum.
            </p>
            <span>$100</span>
            <a className="book-btn" href="tel:8328986091">Book Now</a>
          </div>

          <div className="card popular">
            <div className="badge">Most Popular</div>
            <div className="service-icon">🪑</div>
            <h4>Interior Deep Clean</h4>
            <p>
              Deep vacuum, seat shampooing, stain treatment,
              odor removal, plastics wiped down, and interior surfaces refreshed.
            </p>
            <span>$150</span>
            <a className="book-btn" href="tel:8328986091">Book Now</a>
          </div>

          <div className="card">
            <div className="service-icon">💎</div>
            <h4>Full Premium Detail</h4>
            <p>
              Complete interior deep clean plus exterior hand wash,
              tire shine, windows, wax protection, and final wipe down.
            </p>
            <span>$200</span>
            <a className="book-btn" href="tel:8328986091">Book Now</a>
          </div>

        </div>
      </section>

      <section id="pricing" className="why">
        <p className="section-label">Why Customers Choose Us</p>
        <h3>Clean Cars. Fast Service. Professional Results.</h3>

        <ul>
          <li>Mobile service anywhere in Houston</li>
          <li>Same-day appointments available</li>
          <li>Professional products and equipment</li>
          <li>Fast response times</li>
          <li>Satisfaction guaranteed</li>
        </ul>
      </section>

      <section id="contact" className="contact">
        <p className="section-label">Ready To Book?</p>
        <h3>Book Your Detail Today</h3>
        <p>Call or text now for a free quote.</p>

        <a className="cta" href="tel:8328986091">
          (832) 898-6091
        </a>
      </section>

    </div>
  )
}