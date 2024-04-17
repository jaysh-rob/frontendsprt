import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function CustomNavbar() {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.clear();
    navigate("/");
  }
  const logintkn = JSON.parse(localStorage.getItem('logintkn'));
  return (
    <Navbar expand="lg" className="bg-dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">
          <a href="/">
            {" "}
            <img src={logo} alt="logo" height="60px" width="100px" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="text-white nav-link">
              Home
            </Link>
            <Nav.Link href="/#about" className="text-white">
              About Us
            </Nav.Link>
            <Nav.Link href="/#expert-trainers" className="text-white">
              Expert Trainers
            </Nav.Link>
            <Nav.Link href="/#nutrition" className="text-white">
              Nutrition
            </Nav.Link>
            <Nav.Link href="/#contact" className="text-white">
              Contact Us
            </Nav.Link>
            <Nav.Link onClick={() => !(logintkn?.token) ? alert("Please login before accessing this section") : null} href={!(logintkn?.token) ? "/login" : "/country"} className="text-white">
              Country
            </Nav.Link>
            <Nav.Link onClick={() => !(logintkn?.token) ? alert("Please login before accessing this section") : null} href={!(logintkn?.token) ? "/login" : "/dietapi"} className="text-white">
              Diet
            </Nav.Link>

            <Nav.Link  href={"/cricket"} className="text-white">
              Cricket Scores
            </Nav.Link>

          </Nav>
          {
            !(logintkn?.token) &&
            <div>
              <Link to="/signup" className="mx-2">
                <Button variant="primary">Sign Up</Button>
              </Link>
              <Link to="/login">
                <Button variant="success">Login</Button>
              </Link>
            </div>
          }
          {
            (logintkn?.token) &&
            <Link to="/login">
              <Button onClick={()=>handleLogout()} variant="primary">Logout</Button>
            </Link>
          }

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
