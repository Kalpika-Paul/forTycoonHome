import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import ProductOne from "../assets/img/Tycoon-Logo.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperOne from "../assets/img/1.jpeg";
import SwiperTwo from "../assets/img/8.jpeg";
import { Autoplay } from 'swiper/modules';
import CateOne from "../assets/img/home-appliance.jpg";
import CateTwo from "../assets/img/kitchen_appli.webp";
import CateThree from "../assets/img/fridge.png";
import CateFour from "../assets/img/tv.avif";

const Home = () => {
  return (

    <div>
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


      <section className='sectionOne'>
        <div>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            <SwiperSlide>
              <div className='content' style={{ backgroundImage: `url(${SwiperOne})` }}>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='content' style={{ backgroundImage: `url(${SwiperTwo})` }}>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section className='sectionTwo container'>
        <h2 className='categoryTop py-3'>Our Product Range</h2>
     
        <div className="row py-2 px-5">
          <div className="col-md-3">
            <img src={CateOne} alt="" width={250}/>
          </div>
          <div className="col-md-3">
            <img src={CateTwo} alt="" width={250} />
          </div>

          <div className="col-md-3">
            <img src={CateThree} alt=""  width={250}/>
          </div>
          <div className="col-md-3">
            <img src={CateFour} alt="" width={250} />
          </div>

        </div>

      </section>

    </div>



  )
}

export default Home
