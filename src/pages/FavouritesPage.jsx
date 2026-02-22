import React, { useState, useEffect } from "react";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  const removeFavourite = (name) => {
    const updated = favourites.filter(item => item.name !== name);
    setFavourites(updated);
    localStorage.setItem("favourites", JSON.stringify(updated));
  };

  return (
  <div style={{ padding: "20px", color: "white", paddingTop: "100px" }}>
    <h2>💖 Your Favourites</h2>

    {favourites.length === 0 ? (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "white", paddingTop:"160px" }}>
          No items in favourites
        </h1>
      </div>
    ) : (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "40px",
          justifyItems: "center"
        }}
      >
        {favourites.map((item, index) => (
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
              <p style={{ fontWeight: "bold", fontSize: "16px", margin: 0 }}>
                {item.name}
              </p>
              <p style={{ fontSize: "14px", color: "#666" }}>
                {item.description}
              </p>
            </div>
            {/* Remove Button */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={() => removeFavourite(item.name)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
                title="Remove from Favourites"
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
