
// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
// import Produts from "./pages/product";
// import Aboutus from "./pages/aboutus";
// import ContactUs from "./pages/ContactUs";
// import Home from "./pages/Home";
// import Layout from "./pages/layout";

// function App() {
//   return (
//     <Routes>
//       {/* First page is login */}
//       <Route path="/login" element={<Login />} />

//       {/* All routes inside Layout */}
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Produts />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/contactus" element={<ContactUs />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
// import HerbalProductList from "./pages/product";
// import Aboutus from "./pages/aboutus";
// import ContactUs from "./pages/ContactUs";
// import Home from "./pages/Home";
// import Layout from "./pages/layout";

// // ✅ Import your product page

// import FavouritesPage from "./pages/FavouritesPage";

// function App() {
//   return (
//     <Routes>
//       {/* First page is login */}
//       <Route path="/login" element={<Login />} />

//       {/* All routes inside Layout */}
//       <Route element={<Layout />}>
//         <Route path="/" element={<Home />} /> 
//         <Route path="/products" element={<HerbalProductList />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/contactus" element={<ContactUs />} />
//         <Route path="/favourites" element={<FavouritesPage />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Products from "./pages/product";
import Aboutus from "./pages/aboutus";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Layout from "./pages/layout";
import FavouritesPage from "./pages/FavouritesPage";
import CartPage from "./pages/cart"; // ✅ Import your new Cart page

function App() {
  return (
    <Routes>
      {/* Login page */}
      <Route path="/login" element={<Login />} />

      {/* All routes inside Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/favourites" element={<FavouritesPage />} /> {/* ✅ Added */}
        <Route path="/cart" element={<CartPage />} /> {/* ✅ Added */}
      </Route>
    </Routes>
  );
}

export default App;
