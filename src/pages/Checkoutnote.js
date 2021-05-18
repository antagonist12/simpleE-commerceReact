import React from "react";

// React Bootstrap Components
import { Container, Row, Col, Button } from "react-bootstrap";

// React Router
import { Link } from "react-router-dom";

// Assets
import checkout_payment from "../assets/checkout_payment.png";

function Checkoutnote() {
  return (
    <Container>
      <Row>
        <Col lg="6" className="mx-auto mt-5">
          <img src={checkout_payment} className="img-fluid img_checkoutnote" />
          <Link to="/" className="link_checkoutnote">
            <Button variant="info" className="my-2" block size="lg">
              Back To Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkoutnote;
