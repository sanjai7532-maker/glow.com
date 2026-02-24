// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './pages/Home';
// import Produts from './pages/product';
// import Aboutus from './pages/aboutus'; 
// import Contactus from './pages/contactus';
// import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
// import { FaYoutube, FaTwitter, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
// function App() {

//   return (
//     <>
//     <div className='background'>
//     <BrowserRouter>
//     <div className="navbar">
//     <div className="brand">
//     <Link to="/">GLOWAURA</Link></div>
  
//   <ul className="nav-links">
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/products">Products</Link></li>
//     <li><Link to="/aboutus">About Us</Link></li>
//     <li><Link to="/contactus">Contact Us</Link></li>
//   </ul>
// </div>

//     <Routes>
//     <Route path="/" element={<Home/>}></Route>
//     <Route path="/products" element={<Produts/>}></Route>
//     <Route path="/aboutus" element={<Aboutus/>}></Route>
//     <Route path="/contactus" element={<Contactus/>}></Route>
//     </Routes>
//     </BrowserRouter>
    
//   <footer className="footer">
//       <div className="footer-container">
//   {/* Left: Logo + Description */}
//   <div className="footer-left">
//     <h3>GLOWAURA</h3>
//     <p className="words">
//     GlowAura offers natural, cruelty-free skincare designed to nourish,protect,
//     and enhance your skin’s natural beauty. Our products combine the best of nature 
//     and science for a healthy, radiant glow every day.
//     </p>
//   </div>

//   {/* Middle: Address + Contact Info */}
//   <div className="footer-middle">
//     <p>📍 No: 21, Rose Street, Puducherry</p>
//     <p>📞 +91 9876543210</p>
//     <p>✉️ sanjai6447@gmail.com</p>
//   </div>

//   {/* Social Icons */}
//     <div className="footer-right">
//       <div className="social-icons">
//       <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube size={25} /></a>
//       <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={25} /></a>
//       <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={25} /></a>
//       <a href="https://wa.me/yourNumber" target="_blank" rel="noreferrer"><FaWhatsapp size={25} /></a>
//       <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={25} /></a>
//     </div>
//       {/* Navigation Links */}
//       <div className="footer-links">
//       <a href="/">Home</a>
//       <a href="/products">Products</a>
//       </div>
//       <div className='seperate'>
//       <a href="/about">About</a>
//       <a href="/contactus">Contact Us</a>
//       </div>
//   </div>
// </div>

  
//   </footer>
// </div>
// </>)
// }

// export default App
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Produts from './pages/product';
import Aboutus from './pages/aboutus';
import Contactus from './pages/contactus';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { FaYoutube, FaTwitter, FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <>
      <div className='background'>
        <BrowserRouter >
        <div className='bg'>
          {/* Navigation Bar */}
          <div className="navbar">
            <div className="brand">
              <Link to="/">GLOWAURA</Link>
            </div>

            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>

          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Produts />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
          </div>
        </BrowserRouter>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            {/* Left: Logo + Description */}
            <div className="footer-left">
              <h3>GLOWAURA</h3>
              <p className="words">
                GlowAura offers natural, cruelty-free skincare designed to nourish, protect,
                and enhance your skin’s natural beauty. Our products combine the best of nature
                and science for a healthy, radiant glow every day.
              </p>
            </div>

            {/* Middle: Address + Contact Info */}
            <div className="footer-middle">
              <p>📍 No: 21, Rose Street, Puducherry</p>
              <p>📞 +91 9876543210</p>
              <p>✉️ sanjai6447@gmail.com</p>
            </div>

            {/* Social Icons */}
            <div className="footer-right">
              <div className="social-icons">
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube size={25} /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={25} /></a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={25} /></a>
                <a href="https://wa.me/yourNumber" target="_blank" rel="noreferrer"><FaWhatsapp size={25} /></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={25} /></a>
              </div>

              {/* Navigation Links */}
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/products">Products</a>
              </div>
              <div className='seperate'>
                <a href="/about">About</a>
                <a href="/contactus">Contact Us</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;









import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Produts from "./pages/product";
import Aboutus from "./pages/aboutus";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Welcome to GlowAura</h1>} />
        <Route path="products" element={<Produts />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}