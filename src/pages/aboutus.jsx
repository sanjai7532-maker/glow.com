// import { useState } from "react";
// import "../App.css";

// export const Aboutus = () => {
// const [isPressed, setIsPressed] = useState(false);
// const [location, setLocation] = useState(null);
// const [showPopup, setShowPopup] = useState(false);

// const handleClick = () => {
//     setIsPressed(true);

//     if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//         (position) => {
//         const lat = position.coords.latitude;
//         const lon = position.coords.longitude;
//         setLocation({ lat, lon });
//         setShowPopup(true);
//         },
//         () => {
//         setLocation({ error: "Unable to retrieve your location." });
//         setShowPopup(true);
//         }
//     );
//     } else {
//     setLocation({ error: "Geolocation is not supported by your browser." });
//     setShowPopup(true);
//     }

//     setTimeout(() => {
//     setIsPressed(false);
//     }, 200);
// };

// return (
//     <div className="aboutus-container">
//     <div className="aboutus-inner">
//         <img
//         src="src/assets/bg7.jpg"
//         alt="Web Development"
//         className={`aboutus-image ${isPressed ? "pressed" : ""}`}
//         onClick={handleClick}
//         />

//         <h1 className="aboutus-title">Customized Website Solutions</h1>
//         <h2 className="aboutus-subtitle">Tailored to Meet Your Business Goals</h2>

//         <p className="aboutus-text">
//             A web development company specializes in creating websites that are
//             uniquely crafted for each client. From design to functionality, every
//             element is built with your brand, audience, and business objectives in
//             mind. This ensures that your website not only looks professional but
//             also drives user engagement and conversions.
//         </p>

//         <h2 className="aboutus-section-title">Full-Stack Development Expertise</h2>
//         <p className="aboutus-text">
//             Front-End, Back-End & Everything in Between. These companies have
//             skilled developers who are proficient in both front-end technologies
//             like HTML, CSS, JavaScript, and frameworks such as React or Angular,
//             as well as back-end systems using Node.js, PHP, Python, or databases
//             like MongoDB and MySQL. This full-stack capability ensures seamless
//             integration and a fully functional website from end to end.
//         </p>

//         <h2 className="aboutus-setion-title">Ongoing Support & Maintenance</h2>
//         <p className="aboutus-text">
//             Keeping Your Website Secure and Up-to-Date. Beyond the initial
//             development, web development companies offer long-term support. This
//             includes fixing bugs, updating software, improving performance, and
//             implementing security patches. Regular maintenance keeps your website
//             running smoothly and helps you stay ahead of competitors in the
//             digital space.
//         </p>
//     </div>

//       {/* Popup Modal */}
//     {showPopup && (
//         <div className="popup-overlay">
//         <div className="popup-box">
//             {location?.error ? (
//             <p>{location.error}</p>
//             ) : (
//             <>
//                 {/* <p> {location.lat}</p>
//                 <p> {location.lon}</p> */}
//                 <a
//                 href={`https://www.google.com/maps?q=${location.lat},${location.lon}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 >
//                 Open
//                 </a>
//             </>
//             )}
//             {/* <button className="popup-close" onClick={() => setShowPopup(false)}>
//             Close
//             </button> */}
//         </div>
//         </div>
//     )}
//     </div>
// );
// };

// export default Aboutus;import React from "react";

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif",}}>
      {/* Banner
      <div
        style={{
        //   backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
        }}
      >
        About GlowAura 🌿
      </div> */}

      {/* White Box Content */}
      <div style={{ padding: "130px 20px" }}>
        <div
          style={{
            backgroundColor: "#fff",
            maxWidth: "900px",
            margin: "auto",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            lineHeight: "1.6"
          }}
        >
          <h2 style={{ color: "#2e604a" }}>Our Story</h2>
          <p>
            At GlowAura, we believe that nature holds the secret to true beauty. 
            Our journey began with a passion for herbal remedies and a commitment 
            to creating products that are safe, pure, and effective.  
          </p>

          <h2 style={{ color: "#2e604a", marginTop: "30px" }}>Our Mission</h2>
          <p>
            We aim to provide skincare, haircare, and wellness solutions inspired 
            by nature and backed by science — ensuring our customers experience 
            the gentle yet powerful benefits of herbal care.
          </p>

          <h2 style={{ color: "#2e604a", marginTop: "30px" }}>Our Values</h2>
          <ul style={{ paddingLeft: "20px" }}>
            <li>🌱 100% Natural Ingredients</li>
            <li>♻ Eco-Friendly Packaging</li>
            <li>🐇 Cruelty-Free Products</li>
            <li>💚 Customer-Centric Approach</li>
          </ul>

          {/* Image Section */}
     <img
  src="src/assets/abouts.jpg"
  alt="Herbal Care"
  style={{
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }}
/>


        </div>
      </div>
    </div>
  );
}
