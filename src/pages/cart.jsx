import React, { useState, useEffect } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Remove from cart
  const removeFromCart = (name) => {
    const updated = cart.filter((item) => item.name !== name);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px",color:"white",paddingTop:"100px" }}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
  <h1 style={{ color: "white", paddingLeft:"600px",paddingTop:"100px" }}>
    No items in cart
  </h1>      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          {cart.map((item, index) => (
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
                paddingBottom: "10px",
                
            }}
            >
              {/* Image */}
            <img
                src={item.image}
                alt={item.name}
                style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                boxShadow: "0px 8px 20px rgba(79, 47, 47, 0.31)"
                }}
            />

              {/* Name */}
            <div style={{ padding: "10px" }}>
                <h4
                style={{
                    margin: "0",
                    fontSize: "16px",
                    fontWeight: "bold"
                }}
                >
                {item.name}
                </h4>
                <p style={{ fontSize: "14px", color: "#666" }}>
                {item.description}
                </p>
            </div>

              {/* Remove Button */}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                onClick={() => removeFromCart(item.name)}
                style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "14px"
                }}
                title="Remove from Cart"
                >
                Remove ✖
                </button>
            </div>
            </div>
        ))}
        </div>
    )}
    </div>
);
}

export default CartPage;
