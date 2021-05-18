import React, { useState } from "react";

// React Router
import { Link } from "react-router-dom";

// React Bootstrap Components
import { Button, Navbar, Nav, Form, InputGroup, FormControl, Container } from "react-bootstrap";

//   Font Awesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

//   context reduce api
import { useStateValue } from "./StateProvider";

import { auth } from "../firebase";
import swal from "sweetalert";

function Navbars() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      swal("Logout", "", "success");
      auth.signOut();
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Link to="/">
            <Navbar.Brand className="nav_brand">Vio Store</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Form className="my-3 w-100">
                {/* <InputGroup>
                  <FormControl
                    className="search_input"
                    placeholder="Search Here"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup> */}
              </Form>
            </Nav>
            <Link to="/checkout" className="navbar_shopcart">
              <span>
                {basket?.length}
                <FontAwesomeIcon icon={faShoppingCart} className="my-1 mx-1 icon_shop" />
              </span>
            </Link>
            <span className="mx-2 pipe"></span>
            <p className="mx-2 mt-2">Hello {user ? user.email : "Guest"}</p>
            <Link to={!user && "/login"}>
              <Button variant="outline-info" className="my-1 mx-1" onClick={login}>
                {user ? "Logout" : "Login"}
              </Button>
            </Link>

            {!user ? (
              <Link to={!user && "/register"}>
                <Button variant="info" className="my-1 mx-1">
                  Register
                </Button>
              </Link>
            ) : (
              <></>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
