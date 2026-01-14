import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import ProductOne from "../assets/img/Tycoon-Logo.png";
const Header = () => {
  return (
    <header>
        <div className=" topbar text-center py-1">
          <span className='text-white'>Your Everyday Solutions</span>
        </div>

        {/* navbar start */}
        <div>
          <Navbar expand="lg" className="shadow">
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img src={ProductOne} alt="Logo" width={170} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">


                <Nav className="ms-auto align-items-center">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/products">Products</Nav.Link>
                  <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>


                  <Nav.Link as={Link} to="/profile" className="ms-3 text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                      className="bi bi-person" viewBox="0 0 16 16">
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      <path d="M14 13c0 1-1 1-1 1H3s-1 0-1-1
              1-4 6-4 6 3 6 4" />
                    </svg>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/add-to-cart" className="ms-3 text-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor"
                      className="bi bi-bag" viewBox="0 0 16 16">
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1" />
                      <path d="M2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </Nav.Link>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* navbar end */}


        </div>
      </header>


  )
}

export default Header
