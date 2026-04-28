import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Shop from "./layout/Shop";
import { useState } from "react";
import Footer from "./components/Footer";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import Fabric from "./pages/Fabric";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import Testimonials from "./pages/testimonials";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
      <Route path="/" element={<>
          <Hero />
      <div className="page-container"></div>
      <Categories />
      <Shop search={search}/>
      <Footer/>
      </>}/>
        <Route path="/categories" element={<CategoriesPage/>}/>
        <Route path="/fabric" element={<Fabric/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;