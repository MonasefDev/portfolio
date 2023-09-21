import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Shared/navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Shared/footer/Footer";
import { useState } from "react";
import About from "./pages/About/About";
import Projects from "./pages/projects/Projects";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route index element={<Home isMenuOpen={isMenuOpen} />} />
          <Route
            path="about-me"
            element={<About isMenuOpen={isMenuOpen} />}
          ></Route>
          <Route
            path="projects"
            element={<Projects isMenuOpen={isMenuOpen} />}
          />
          <Route path="contact" element={<About isMenuOpen={isMenuOpen} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
