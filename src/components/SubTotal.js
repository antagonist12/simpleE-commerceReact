import React from "react";

// Router
import { Link } from "react-router-dom";

// React Bootstrap Components
import { Button, Container, Row, Col, Card } from "react-bootstrap";

// React currency format
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "../reducer";

import swal from "sweetalert";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  const checkout = () => {
    swal("Trade Success", "Success Buy The Items", "success");

    dispatch({
      type: "clear_checkout",
    });
  };

  return (
    <div>
      <h3 className="mt-5">Subtotal Items</h3>
      <Card className="mt-3">
        <Card.Body>
          {/* Price */}
          <CurrencyFormat
            renderText={(value) => (
              <p>
                SubTotal ({basket.length} items) : <strong>{`${value}`}</strong>
              </p>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp."}
          />
        </Card.Body>
      </Card>

      <Row className="mt-3">
        <Col>
          {/* Button checkout */}
          <Link to="/checkoutnote">
            <Button variant="info" size="sm" onClick={checkout}>
              Proceed to Checkout
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default SubTotal;
