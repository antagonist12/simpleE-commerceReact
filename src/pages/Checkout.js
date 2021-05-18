import React from "react";

// Components
import Navbars from "../components/Navbars";
import CheckoutProduct from "../components/CheckoutProduct";
import SubTotal from "../components/SubTotal";
import Footer from "../components/Footer";

import { useStateValue } from "../components/StateProvider";

// React Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Navbars />
      {/* Kondisi */}
      {basket?.length === 0 ? (
        <Container>
          <Row className="mb-5">
            <Col lg="6">
              <h2 className="mt-3">Your Basket Is Empty</h2>
              <p>Please Add Your Item's First</p>
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row className="mb-5 justify-content-between">
            <Col lg="6">
              <h2 className="mt-3">Your Basket</h2>
              <hr />
              {/* List Product */}
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  desc={item.desc}
                  qty={item.qty}
                />
              ))}
            </Col>
            {basket.length > 0 && (
              <Col lg="5">
                <SubTotal />
              </Col>
            )}
          </Row>
        </Container>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default Checkout;
