// import React, { useState, useEffect } from "react";

// // Herbal products data
// const herbalProducts = [
//   { name: "Aloe Vera Gel", category: "Skin Care", description: "Natural soothing gel for skin hydration and sunburn relief.", image: "src/assets/pr.jpg" },
//   { name: "Neem Face Pack", category: "Face Care", description: "Anti-acne and deep cleansing herbal face pack.", image: "src/assets/pr1.jpg" },
//   { name: "Tulsi Green Tea", category: "Beverage", description: "Refreshing herbal tea rich in antioxidants.", image: "src/assets/pr2.jpg" },
//   { name: "Brahmi Hair Oil", category: "Hair Care", description: "Strengthens hair roots and promotes growth.", image: "src/assets/pr3.jpg" },
//   { name: "Ashwagandha Powder", category: "Wellness", description: "Boosts immunity and reduces stress.", image: "src/assets/pr4.jpg" },
//   { name: "Lemongrass Essential Oil", category: "Aromatherapy", description: "Refreshing oil for relaxation and freshness.", image: "src/assets/pr5.jpg" },
//   { name: "Hibiscus Shampoo", category: "Hair Care", description: "Nourishes hair and prevents dandruff.", image: "src/assets/pr6.jpg" },
//   { name: "Turmeric Face Cream", category: "Skin Care", description: "Brightens skin tone and reduces blemishes.", image: "src/assets/pr7.jpg" },
//   { name: "Amla Juice", category: "Wellness", description: "Rich in Vitamin C, boosts immunity.", image: "src/assets/pr8.jpg" },
//   { name: "Rose Water", category: "Skin Care", description: "Natural toner for fresh and glowing skin.", image: "src/assets/pr9.jpg" },
//   { name: "Herbal Toothpaste", category: "Oral Care", description: "Fluoride-free paste with neem and clove for healthy teeth.", image: "src/assets/pr10.jpg" },
//   { name: "Lavender Bath Salt", category: "Body Care", description: "Relaxes muscles and improves sleep.", image: "src/assets/pr11.jpg" }
// ];

// function HerbalProductList() {
//   const [products] = useState(herbalProducts);
//   const [favourites, setFavourites] = useState([]);
//   const [cart, setCart] = useState([]);

//   // Load favourites from localStorage when page loads
//   useEffect(() => {
//     const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
//     setFavourites(savedFavourites);
//   }, []);

//   // Save favourites to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("favourites", JSON.stringify(favourites));
//   }, [favourites]);

//   // Toggle favourites
//   const handleToggleFavourite = (product) => {
//     const exists = favourites.find((item) => item.name === product.name);
//     if (exists) {
//       setFavourites(favourites.filter((item) => item.name !== product.name));
//     } else {
//       setFavourites([...favourites, product]);
//     }
//   };

//   // Add to cart
//   const handleAddToCart = (product) => {
//     if (!cart.find((item) => item.name === product.name)) {
//       setCart([...cart, product]);
//       alert(`${product.name} added to cart 🛒`);
//     }
//   };

//   const renderProductCard = (product, index) => {
//     const isFavourite = favourites.find((item) => item.name === product.name);

//     return (
//       <div
//         key={index}
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           overflow: "hidden",
//           boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//           textAlign: "center",
//           background: "#ffffffff",
//           maxWidth: "250px",
//           paddingBottom: "10px"
//         }}
//       >
//         {/* Image */}
//         <img
//           src={product.image}
//           alt={product.name}
//           style={{
//             width: "100%",
//             height: "200px",
//             objectFit: "cover",
//             boxShadow: "0px 8px 20px rgba(79, 47, 47, 0.31)"
//           }}
//         />

//         {/* Name */}
//         <div style={{ padding: "10px" }}>
//           <p style={{ fontWeight: "bold", fontSize: "16px", margin: 0 }}>
//             {product.name}
//           </p>
//           <p style={{ fontSize: "14px", color: "#666" }}>{product.description}</p>
//         </div>

//         {/* Buttons */}
//         <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
//           <button
//             onClick={() => handleToggleFavourite(product)}
//             style={{
//               background: isFavourite ? "darkred" : "red",
//               color: "white",
//               border: "none",
//               padding: "8px 12px",
//               borderRadius: "50%",
//               cursor: "pointer",
//               fontSize: "18px"
//             }}
//             title="Add to Favourites"
//           >
//             ❤️
//           </button>
//           <button
//             onClick={() => handleAddToCart(product)}
//             style={{
//               background: "green",
//               color: "white",
//               border: "none",
//               padding: "8px 12px",
//               borderRadius: "50%",
//               cursor: "pointer",
//               fontSize: "18px"
//             }}
//             title="Add to Cart"
//           >
//             🛒
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//         gap: "20px",
//         paddingLeft: "80px",
//         paddingTop: "100px",
//         paddingBottom: "40px"
//       }}
//     >
//       {products.map(renderProductCard)}
//     </div>
//   );
// }

// export default HerbalProductList;
import React, { useState, useEffect } from "react";

// Herbal products data
const herbalProducts = [
  { name: "Aloe Vera Gel", category: "Skin Care", description: "Natural soothing gel for skin hydration and sunburn relief.", image: "src/assets/pr.jpg" },
  { name: "Neem Face Pack", category: "Face Care", description: "Anti-acne and deep cleansing herbal face pack.", image: "src/assets/pr1.jpg" },
  { name: "Tulsi Green Tea", category: "Beverage", description: "Refreshing herbal tea rich in antioxidants.", image: "src/assets/pr2.jpg" },
  { name: "Brahmi Hair Oil", category: "Hair Care", description: "Strengthens hair roots and promotes growth.", image: "src/assets/pr3.jpg" },
  { name: "Ashwagandha Powder", category: "Wellness", description: "Boosts immunity and reduces stress.", image: "src/assets/pr4.jpg" },
  { name: "Lemongrass Essential Oil", category: "Aromatherapy", description: "Refreshing oil for relaxation and freshness.", image: "src/assets/pr5.jpg" },
  { name: "Hibiscus Shampoo", category: "Hair Care", description: "Nourishes hair and prevents dandruff.", image: "src/assets/pr6.jpg" },
  { name: "Turmeric Face Cream", category: "Skin Care", description: "Brightens skin tone and reduces blemishes.", image: "src/assets/pr7.jpg" },
  { name: "Amla Juice", category: "Wellness", description: "Rich in Vitamin C, boosts immunity.", image: "src/assets/pr8.jpg" },
  { name: "Rose Water", category: "Skin Care", description: "Natural toner for fresh and glowing skin.", image: "src/assets/pr9.jpg" },
  { name: "Herbal Toothpaste", category: "Oral Care", description: "Fluoride-free paste with neem and clove for healthy teeth.", image: "src/assets/pr10.jpg" },
  { name: "Lavender Bath Salt", category: "Body Care", description: "Relaxes muscles and improves sleep.", image: "src/assets/pr11.jpg" }
];

function HerbalProductList() {
  const [products] = useState(herbalProducts);
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);

  // Load favourites from localStorage
  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedFavourites);
  }, []);

  // Save favourites to localStorage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Toggle favourites
  const handleToggleFavourite = (product) => {
    const exists = favourites.some((item) => item.name === product.name);
    if (exists) {
      setFavourites(favourites.filter((item) => item.name !== product.name));
    } else {
      setFavourites([...favourites, product]);
    }
  };

  // Toggle cart
  const handleToggleCart = (product) => {
    const exists = cart.some((item) => item.name === product.name);
    if (exists) {
      setCart(cart.filter((item) => item.name !== product.name));
    } else {
      setCart([...cart, product]);
    }
  };

  const renderProductCard = (product, index) => {
    const isFavourite = favourites.some((item) => item.name === product.name);
    const isInCart = cart.some((item) => item.name === product.name);

    return (
      <div
        key={index}
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          textAlign: "center",
          background: "#fff",
          maxWidth: "250px",
          paddingBottom: "10px"
        }}
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            boxShadow: "0px 8px 20px rgba(79, 47, 47, 0.31)"
          }}
        />

        {/* Name */}
        <div style={{ padding: "10px" }}>
          <p style={{ fontWeight: "bold", fontSize: "16px", margin: 0 }}>
            {product.name}
          </p>
          <p style={{ fontSize: "14px", color: "#666" }}>{product.description}</p>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {/* Favourite Button */}
          <button
            onClick={() => handleToggleFavourite(product)}
            style={{
              background: isFavourite ? "red" : "#dfd4c9ff",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px"
            }}
            title={isFavourite ? "Remove from Favourites" : "Add to Favourites"}
          >
            ❤️
          </button>

          {/* Cart Button */}
          <button
            onClick={() => handleToggleCart(product)}
            style={{
              background: isInCart ? "darkgreen" : "#dfd4c9ff",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px"
            }}
            title={isInCart ? "Remove from Cart" : "Add to Cart"}
          >
            🛒
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        paddingLeft: "80px",
        paddingTop: "100px",
        paddingBottom: "40px"
      }}
    >
      {products.map(renderProductCard)}
    </div>
  );
}

export default HerbalProductList;
