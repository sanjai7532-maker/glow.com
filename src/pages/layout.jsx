// // Layout.js
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import "../App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaYoutube, FaTwitter, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { useState, useEffect } from "react";

// export default function Layout() {
//   const navigate = useNavigate();
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [showProfile, setShowProfile] = useState(false);

//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) setLoggedInUser(JSON.parse(user));
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setLoggedInUser(null);
//     navigate("/");
//   };

//   const handleProfileClick = () => {
//     setShowProfile(!showProfile);
//   };

//   return (
//     <div className="background">
//       {/* Navbar */}
//       <div
//         style={{
//           position: "absolute",
//           top: "0",
//           left: "0",
//           width: "100%",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           padding: "20px 50px",
//           background: "rgba(0, 0, 0, 0.6)",
//           zIndex: 2,
//         }}
//       >
//         {/* Brand */}
//         <div className="brand" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
//           <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//             GLOWAURA
//           </Link>
//         </div>

//         {/* Links */}
//         <ul
//           style={{
//             display: "flex",
//             listStyle: "none",
//             gap: "20px",
//             margin: 0,
//             alignItems: "center",
//           }}
//         >
//           <li>
//             <Link to="/" style={{ color: "white", textDecoration: "none" }}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/aboutus" style={{ color: "white", textDecoration: "none" }}>
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/ContactUs" style={{ color: "white", textDecoration: "none" }}>
//               Contact Us
//             </Link>
//           </li>

//           {/* Login / Profile */}
//           {loggedInUser ? (
//             <div style={{ position: "relative" }}>
//               <img
//                 src={loggedInUser.profilePic}
//                 alt="Profile"
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   cursor: "pointer",
//                 }}
//                 onClick={handleProfileClick}
//                 title="View Profile"
//               />

//               {showProfile && (
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "50px",
//                     right: -35,
//                     background: "white",
//                     color: "black",
//                     border: "1px solid #ccc",
//                     borderRadius: "2px",
//                     padding: "10px",
//                     zIndex: 10,
//                     minWidth: "150px",
//                     paddingLeft:"10px"
//                   }}
//                 >
//                   <button
//                     style={{
//                       padding: "8px 12px",
//                       // background: "orange",
//                       border: "none",
//                       borderRadius: "2px",
//                       color: "black",
//                       cursor: "pointer",
//                     }}
//                     onClick={() => navigate("/favourites")}
//                   >
//                     ❤️ Favourites
//                   </button>

//                   <button
//                     style={{
//                       padding: "8px 12px",
//                       // background: "green",
//                       border: "none",
//                       borderRadius: "2px",
//                       color: "Black",
//                       cursor: "pointer",
//                       marginTop: "8px",
//                       paddingRight: "60px",

//                     }}
//                     onClick={() => navigate("/cart")}
//                   >
//                     🛒 Cart
//                   </button>

//                   <button
//                     style={{
//                       padding: "8px 12px",
//                       // background: "red",
//                       border: "none",
//                       borderRadius: "2px",
//                       color: "black",
//                       cursor: "pointer",
//                       marginTop: "8px",
//                       paddingRight: "38px",
//                     }}
//                     onClick={handleLogout}
//                   >
//                     🚪 Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link
//               to="/login"
//               style={{
//                 color: "white",
//                 textDecoration: "none",
//                 backgroundColor: "blue",
//                 padding: "5px 15px",
//                 borderRadius: "5px",
//               }}
//             >
//               Login
//             </Link>
//           )}
//         </ul>
//       </div>

//       {/* Page content */}
//       <div className="main-content">
//         <Outlet />
//       </div>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-left">
//             <h3>GLOWAURA</h3>
//             <p className="words">
//               GlowAura offers natural, cruelty-free skincare designed to nourish, protect, and enhance your skin’s natural beauty.
//               Our products combine the best of nature and science for a healthy, radiant glow every day.
//             </p>
//           </div>

//           <div className="footer-middle">
//             <p>📍 No: 21, Rose Street, Puducherry</p>
//             <p>📞 +91 9876543210</p>
//             <p>✉️ sanjai6447@gmail.com</p>
//           </div>

//           <div className="footer-right">
//             <div className="social-icons">
//               <a href="https://youtube.com" target="_blank" rel="noreferrer">
//                 <FaYoutube size={25} />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noreferrer">
//                 <FaTwitter size={25} />
//               </a>
//               <a href="https://facebook.com" target="_blank" rel="noreferrer">
//                 <FaFacebook size={25} />
//               </a>
//               <a href="https://wa.me/yourNumber" target="_blank" rel="noreferrer">
//                 <FaWhatsapp size={25} />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer">
//                 <FaInstagram size={25} />
//               </a>
//             </div>
//             <div className="footer-links">
//               <Link to="/home">Home</Link>
//               <Link to="/products">Products</Link>
//             </div>
//             <div className="seperate">
//               <Link to="/aboutus">About</Link>
//               <Link to="/ContactUs">ContactUs</Link>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
// Layout.js
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaYoutube, FaTwitter, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Layout() {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) setLoggedInUser(JSON.parse(user));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setShowProfile(false); // Close dropdown
    navigate("/");
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="background">
      {/* Navbar */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          background: "rgba(0, 0, 0, 0.6)",
          zIndex: 2,
        }}
      >
        {/* Brand */}
        <div className="brand" style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            GLOWAURA
          </Link>
        </div>

        {/* Links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "20px",
            margin: 0,
            alignItems: "center",
          }}
        >
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/aboutus" style={{ color: "white", textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" style={{ color: "white", textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>

          {/* Login / Profile */}
          {loggedInUser ? (
            <div style={{ position: "relative" }}>
              <img
                src={loggedInUser.profilePic}
                alt="Profile"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
                onClick={handleProfileClick}
                title="View Profile"
              />

              {showProfile && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    right: -35,
                    background: "white",
                    color: "black",
                    border: "1px solid #ccc",
                    borderRadius: "2px",
                    padding: "10px",
                    zIndex: 10,
                    minWidth: "150px",
                    paddingLeft: "10px",
                  }}
                >
                  {/* Favourites */}
                  <button
                    style={{
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "2px",
                      color: "black",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setShowProfile(false); // Close dropdown
                      navigate("/favourites");
                    }}
                  >
                    ❤️ Favourites
                  </button>

                  {/* Cart */}
                  <button
                    style={{
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "2px",
                      color: "Black",
                      cursor: "pointer",
                      marginTop: "8px",
                      paddingRight: "60px",
                    }}
                    onClick={() => {
                      setShowProfile(false); // Close dropdown
                      navigate("/cart");
                    }}
                  >
                    🛒 Cart
                  </button>

                  {/* Logout */}
                  <button
                    style={{
                      padding: "8px 12px",
                      border: "none",
                      borderRadius: "2px",
                      color: "black",
                      cursor: "pointer",
                      marginTop: "8px",
                      paddingRight: "38px",
                    }}
                    onClick={handleLogout}
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                backgroundColor: "blue",
                padding: "5px 15px",
                borderRadius: "5px",
              }}
            >
              Login
            </Link>
          )}
        </ul>
      </div>

      {/* Page content */}
      <div className="main-content">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>GLOWAURA</h3>
            <p className="words">
              GlowAura offers natural, cruelty-free skincare designed to nourish, protect, and enhance your skin’s natural beauty.
              Our products combine the best of nature and science for a healthy, radiant glow every day.
            </p>
          </div>

          <div className="footer-middle">
            <p>📍 No: 21, Rose Street, Puducherry</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ sanjai6447@gmail.com</p>
          </div>

          <div className="footer-right">
            <div className="social-icons">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube size={25} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter size={25} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook size={25} />
              </a>
              <a href="https://wa.me/yourNumber" target="_blank" rel="noreferrer">
                <FaWhatsapp size={25} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram size={25} />
              </a>
            </div>
            <div className="footer-links">
              <Link to="/home">Home</Link>
              <Link to="/products">Products</Link>
            </div>
            <div className="seperate">
              <Link to="/aboutus">About</Link>
              <Link to="/ContactUs">ContactUs</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
