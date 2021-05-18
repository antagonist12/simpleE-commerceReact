import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { useStateValue } from "./StateProvider";
import swal from "sweetalert";

function Products({ id, title, image, price, desc, qty }) {
  const [{}, dispatch] = useStateValue();

  // Add to basket
  const addToBasket = () => {
    swal("Item Added", "Success Add The Items", "success");
    // add item to basket
    dispatch({
      type: "Add_To_Basket",
      item: {
        // key : value
        id: id,
        title: title,
        image: image,
        price: price,
        desc: desc,
        qty: qty,
      },
    });
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={12} className="py-2 mb-3">
          <Card className="item_product">
            <Card.Img variant="top" src={image} className="mb-3 img-fluid" />
            <Card.Body className="item_desc">
              <h5>{title}</h5>
              <p>{desc}</p>
              <p>Rp. {price}</p>
              <Button variant="dark" block onClick={addToBasket}>
                Add to basket
              </Button>
              {/* <Button variant="dark" block>Detail</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Products;
