import React, { useState } from "react";

// React Router
import { Link, useHistory } from "react-router-dom";

import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";

import { auth } from "../firebase";

import "../App.css";

import swal from "sweetalert";

function Login() {
  const history = useHistory();

  // Set State for save email and password variabel from input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //stop the refresh
    // login logic...

    if (!email) {
      return swal("Login Fail", "Wrong Email and Password", "error");
    } else if (!password) {
      return swal("Login Fail", "Wrong Email and Password", "error");
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in success and redirect to homepage...
        swal("Login Success", "", "success");
        history.push("/");
      })
      .catch((event) => swal(event.message));
    // .catch((event) => swal("Login Success", "", "success"));
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto mt-5">
          <Card className="text-center login__card">
            <Card.Body>
              <h3 className="mb-5 text-info">Login Here !</h3>
              <Form>
                <Form.Group as={Row}>
                  <Col sm="12">
                    <Form.Control value={email} type="email" placeholder="Enter Your Email" id="email" name="email" onChange={(event) => setEmail(event.target.value)} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row}>
                  <Col sm="12">
                    <Form.Control value={password} type="password" placeholder="Enter Your Password" id="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                  </Col>
                </Form.Group>

                <Button variant="info" type="submit" size="md" className="my-1 mx-1" onClick={login}>
                  Login
                </Button>
                <Link to="/register">
                  <Button variant="outline-secondary" size="md" className="my-1 mx-1">
                    Register Here
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

export default Login;
