import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "../App.css";
import Produts from "../pages/product";
import Aboutus from "../pages/aboutus";
import ContactUs from "./ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";

// Reusable Hero Slider Component
function HeroSlider() {
  const images = [
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    "https://images.unsplash.com/photo-1587731556938-38755b4803a6",
    "https://images.unsplash.com/photo-1509043759401-136742328bb3"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        backgroundImage: `url('${images[currentIndex]}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background-image 1s ease-in-out"
      }}
    >
      <div
  style={{
    textAlign: "center",
    zIndex: 1,
    background: "rgba(0,0,0,0.4)",
    padding: "20px 30px",
    borderRadius: "8px",
    display: "inline-block",
    maxWidth: "700px",
  }}
>
  <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#fff" }}>
    Your daily glow, naturally
  </h2>
  <p
    style={{
      fontSize: "1.2rem",
      margin: 0,
      color: "#fff",
    }}
  >
    Discover our natural and cruelty-free skincare products designed for
    radiant, healthy skin.
  </p>
  <Link to="/products" className="btn btn-light btn-lg mt-3">
          Shop Now
        </Link>
</div>
    </section>
  );
}

// Layout wrapper
function Layout({ children }) {
  return <div className="background">{children}</div>;
}

// Home Page
function HomePage() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Featured Products */}
      <section style={{ padding: "50px 20px", color: "white", textAlign: "center" }}>
        <h2>Featured Products</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px"
          }}
        >
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="src/assets/hm1.jpeg"
              className="card-img-top"
              alt="Product 2"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Herbal Face Wash</h5>
              <p className="card-text">Gentle cleansing for glowing skin.</p>
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="src/assets/hm.jpeg"
              className="card-img-top"
              alt="Glow Serum"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">Glow Serum</h5>
              <p className="card-text">
                Brightens & nourishes your skin naturally.
              </p>
              <Link to="/products" className="btn btn-primary">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <center>
        <section style={{ padding: "50px 10px", color: "#f6f1f1ff" }}>
          <p style={{ maxWidth: "800px", margin: "auto" }}>
            GlowAura was born out of a passion for natural skincare. Our mission
            is simple: to offer cruelty-free, eco-friendly, and effective
            skincare solutions that harness the power of nature to give you a
            healthy, radiant glow every day.
          </p>
        </section>
      </center>

      {/* Call to Action */}
      <section style={{ padding: "40px 20px", color: "#fbf6f6ff", textAlign: "center" }}>
        <h2>Ready to Glow?</h2>
        <Link to="/products" className="btn btn-success btn-lg mt-3">
          Start Shopping
        </Link>
      </section>
    </div>
  );
}

// Main Home Component with Routes
export default function Home() {
  return (
    <Routes>
      <Route path="/login" element={<Layout><HomePage /></Layout>} />
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/products" element={<Layout><Produts /></Layout>} />
      <Route path="/aboutus" element={<Layout><Aboutus /></Layout>} />
      <Route path="/ContactUs" element={<Layout><ContactUs /></Layout>} />
    </Routes>
  );
}
