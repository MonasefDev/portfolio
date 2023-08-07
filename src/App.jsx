import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Footer from "./pages/Shared/footer/Footer";
import { useState } from "react";
import Home from "./pages/Home/Home";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route index element={<Home isMenuOpen={isMenuOpen} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
