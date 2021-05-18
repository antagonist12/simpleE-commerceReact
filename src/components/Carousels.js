import React from "react";
import Carousel from "react-bootstrap/Carousel";

// Banner
import wolf from "../assets/wolf.jpg";
import sepatu_tipe_1 from "../assets/sepatu_tipe_1.jpg";
import sepatu_tipe_2 from "../assets/sepatu_tipe_2.jpg";

function Carousels() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" alt="First slide" src={sepatu_tipe_1} />
        <Carousel.Caption className="carousel-caption">
          <h3>Sepatu Tipe 1</h3>
          <p>Sepatu Keren Berwarna Merah Putih.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" alt="Second slide" src={sepatu_tipe_2} />
        <Carousel.Caption className="carousel-caption">
          <h3>Sepatu Tipe 2</h3>
          <p>Sepatu Keren Berwarna Hitam</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
