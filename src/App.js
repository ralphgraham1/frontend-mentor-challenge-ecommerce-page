// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Women from "./components/contact";
import Collections from "./components/collections";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
