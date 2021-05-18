import React from "react";

import { useStateValue } from "../components/StateProvider";

// React Bootstrap Components
import { Button, Container, Row, Col } from "react-bootstrap";

//   Font Awesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import swal from "sweetalert";

function CheckoutProduct({ id, title, image, price, desc, qty }) {
  const [{ basket }, dispatch] = useStateValue();

  const RemoveFromBasket = () => {
    swal("Item Removed", "Success Remove The Item", "info");
    // Remove item from basket
    dispatch({
      type: "Remove_From_Basket",
      id: id,
    });
  };

  const Increase = () => {
    dispatch({
      type: "Increase_qty",
      id: id,
      qty: qty,
    });
  };

  const Decrease = () => {
    dispatch({
      type: "Decrease_qty",
      id: id,
      qty: qty,
    });
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col md="4">
          <img className="img-fluid" src={image} alt="" />
        </Col>
        <Col md="6">
          <h2 className="m-0">{title}</h2>
          <h5 className="m-0">Rp. {price}</h5>
          <p className="m-0">{desc}</p>
          <Button
            variant="warning"
            className="mr-2 text-white"
            onClick={Decrease}
          >
            <FontAwesomeIcon icon={faMinus} />
          </Button>
          <small>{qty}</small>
          <Button variant="info" className="ml-2" onClick={Increase}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Col>
        <Col md="2">
          <Button variant="danger" size="sm" onClick={RemoveFromBasket}>
            <FontAwesomeIcon icon={faTimesCircle} size="2x" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckoutProduct;
