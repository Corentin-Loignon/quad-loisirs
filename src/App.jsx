import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from "./common/Navbar/Navbar"
import Footer from "./common/Footer/Footer"
import Home from "./pages/Home/Home"
import Randos from "./pages/Randos/Randos"
import Prices from "./pages/Prices/Prices"
import Gallery from "./pages/Gallery/Gallery"
import Contact from "./pages/Contact/Contact"

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/randos' element={<Randos />} />
      <Route path='/prices' element={<Prices />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </>

  );
}

export default App;
