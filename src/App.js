import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/Main/MainPage";
import ProductPage from "./components/ProductsPage/ProductsPage";
import BookmarkPage from "../src/components/Bookmark/BookmarkPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
