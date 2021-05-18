import React, { useState } from "react";

// React Router
import { Link, useHistory } from "react-router-dom";

import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";

import "../App.css";

import { auth } from "../firebase";

import swal from "sweetalert";

function Register() {
  const history = useHistory();

  // Set State for save email and password variabel from input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");

  const register = (event) => {
    event.preventDefault(); //stop the refresh
    // register logic...
    if (!email && !password) {
      return swal("Register Fail", "All Form Is Required", "error");
    } else if (!password) {
      return swal("Register Fail", "Password Is Required", "error");
    } else if (password !== confpassword) {
      return swal("Register Fail", "Password Didn't Match", "error");
    } else if (!email) {
      return swal("Register Fail", "Email Is Required", "error");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // register in success and redirect to homepage...
        swal("Register Success", "", "success");
        history.push("/");
      })
      .catch((event) => swal(event.message));
    //   .catch((event) => swal("Register Success", "", "success"));
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto my-3">
          <Card className="text-center register__card">
            <Card.Body>
              <h3 className="mb-5 text-info">Register Here !</h3>

              <Form>
                {/* <Form.Group as={Row} controlId="formPlaintextName">
                  <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Your Name" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPhone">
                  <Col sm="12">
                    <Form.Control type="number" placeholder="Enter Your Phone Number" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextAddress">
                  <Col sm="12">
                    <Form.Control as="textarea" rows={3} placeholder="Enter Your Address" />
                  </Col>
                </Form.Group> */}

                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Col sm="12">
                    <Form.Control value={email} name="email" type="email" placeholder="Enter Your Email" onChange={(event) => setEmail(event.target.value)} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Col sm="12">
                    <Form.Control value={password} onChange={(event) => setPassword(event.target.value)} name="password" type="password" placeholder="Enter Your Password" />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextRePassword">
                  <Col sm="12">
                    <Form.Control value={confpassword} onChange={(event) => setConfPassword(event.target.value)} name="confpassword" type="password" placeholder="Re-Enter Your Password" />
                  </Col>
                </Form.Group>

                <Button variant="info" type="submit" size="md" className="my-1 mx-1" onClick={register}>
                  Register
                </Button>
                <Link to="/login">
                  <Button variant="outline-secondary" size="md" className="my-1 mx-1">
                    Already Have An Account?
                  </Button>
                </Link>
              </Form>
              <hr />
              <Link to="/">Back To Homepage</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
