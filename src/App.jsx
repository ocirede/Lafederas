
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/features/navbar";
import Home from "./pages/home";
import About from "./pages/about";


import { ThemeProvider } from "./context/theme-context";
import Contactform from "./components/features/contact-form";
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="min-h-[92vh] container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactform />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;


