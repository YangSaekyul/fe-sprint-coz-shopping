import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductsListPage";
import BookmarkPage from "./pages/BookmarkPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
