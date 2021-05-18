import React from "react";

// Components
import Navbars from "../components/Navbars";
import Carousels from "../components/Carousels";
import Products from "../components/Products";
import Footer from "../components/Footer";

// Product Item
import wolf from "../assets/wolf.jpg";
import sepatu_tipe_1 from "../assets/sepatu_tipe_1.jpg";
import sepatu_tipe_2 from "../assets/sepatu_tipe_2.jpg";

function Home() {
  return (
    <>
      {/* localhost/vio-store/ */}
      <Navbars />
      <Carousels />
      <div className="home__product">
        <Products id="123" title="Sepatu Baru" desc="Sepatu Baru Tipe 1" price={20000} image={sepatu_tipe_1} qty={1} />
        <Products id="456" title="Sepatu Baru 2" desc="Sepatu Baru Tipe 2" price={30000} image={sepatu_tipe_2} qty={1} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
