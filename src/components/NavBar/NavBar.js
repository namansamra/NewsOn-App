import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
} from "react-bootstrap";
function NavBar() {
  return (
    <Navbar className=" justify-content-center" variant="dark">
      <Navbar.Brand
        href="https://www.linkedin.com/in/naman-samra-17ns12/"
        style={{ fontSize: "bolder", borderBottom: "4px solid white" }}
      >
        Created by : Naman Samra
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
