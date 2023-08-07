import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Footer from "./pages/Shared/footer/Footer";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div>Home</div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
