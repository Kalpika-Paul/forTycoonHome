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
import CateThree from "../assets/img/fridge.jpg";
import CateFour from "../assets/img/tv.avif";
import FooterLogo from "../assets/img/Tycoon-Logo.png";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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
            <img src={CateOne} alt="" width={250} />
          </div>
          <div className="col-md-3">
            <img src={CateTwo} alt="" width={250} />
          </div>

          <div className="col-md-3">
            <img src={CateThree} alt="" width={250} />
          </div>
          <div className="col-md-3">
            <img src={CateFour} alt="" width={250} />
          </div>

        </div>

      </section>


      <section className='sectionTwo'>

      </section>


      <footer className='py-5 mt-5 overflow-hidden'>

        {/* newsletter start */}
        <div className="row newsletter ">
          <div className="col-md-6">
            <div>
              <h3 className='text-white py-4 text-center'>Sign in To Our Newsletter <br /> Lets Connect !!!
              </h3>

            </div>


          </div>

          <div className="col-md-6 py-3">
            <Link>
              <InputGroup className=" py-4 newslet ">
                <Form.Control className='form-place'
                  placeholder="Your Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2" className='subbtn'>Subscribe</InputGroup.Text>
              </InputGroup>
            </Link>
          </div>
        </div>
        {/* newsletter end */}


        {/* footer start */}
        <div className="container">
          <div className="row pt-5  allcols">
            <div className="col-md-3">
              <img src={FooterLogo} alt="" width={250} className='mb-2' />
              <div className=' pt-3 pe-5 small lh-sm short-text text-justify'>Tycoon Hi-Tech Park is a growing consumer home appliance manufacturer company in Bangladesh. Our vision is to manufacture products locally and to make Bangladesh proud of Made-in-Bangladesh level by providing latest technologies oriented and highly innovative products which are obviously better than the competitors. Our design is extremely export</div>
            </div>
            {/* products start */}
            <div className="col-md-3">
              <h3 className='mb-3'>Our Products</h3>
              <ul>
                <Link><li>Refrigerators
                </li>
                </Link>
                <Link> <li>Microwave Ovens
                </li>
                </Link>
                <Link><li>LED Television
                </li>
                </Link>
                <Link><li>Rice Cookers</li></Link>
                <Link><li>Mixer Grinders</li></Link>
                <Link><li>Pressure Cookers</li></Link>
                <Link><li>Kitchen Appliances</li></Link>
              </ul>
            </div>
            {/* products end */}

            {/* quick links start */}
            <div className="col-md-3">
              <h3 className='mb-3'>Quick Links</h3>
              <ul>
                <Link><li>Home</li>
                </Link>
                <Link><li>About Us</li>
                </Link>
                <Link><li>Testimonials</li>
                </Link>
                <Link><li>Contact</li>
                </Link>
                <Link><li>Login</li>
                </Link>
                <Link><li>Register</li>
                </Link>
              </ul>
            </div>
            {/* quick links end */}


            {/* Get in touch start */}
            <div className="col-md-3">
              <h3 className='mb-3'>Get In Touch</h3>
              <div>
                <p>
                  <span className='fw-bolder'>Head Office:
                  </span> <br />
                  Mirpur, Dhaka, Bangladesh

                </p>


                <div>
                  <span className='fw-bolder'>Regional Office / Showroom:
                  </span> <br />
                  377, Jhenaidah Road,  Chourhash,<br />
                  Kushtia-7000, Bangladesh
                </div>
               
                <div className='d-flex align-items-center justify-content-start mt-2 gap-3'>
                  <Link to="/facebook" style={{color:'#e82d31'}}>
                    <i className="bi bi-facebook fs-2 iconz "></i>
                  </Link>
                  <Link to="/linkedin" style={{color:'#e82d31'}}>
                    <i className="bi bi-linkedin fs-2  iconz"></i>
                  </Link>
                  <Link to="/instagram" style={{color:'#e82d31'}}>
                    <i className="bi bi-instagram fs-2  iconz"></i>
                  </Link>
                  <Link to="/youtube" style={{color:'#e82d31'}}>
                    <i className="bi bi-youtube fs-1  iconz"></i>
                  </Link>
                </div>


              </div>





            </div>
            {/* Get in touch start */}
          </div>
<hr />
          <div className="row" >
            <div className="col-md-12 text-center pt-1 text-dark">
              <p>&copy;2026 All rights reserve</p>
            </div>
          </div>


        </div>

        {/* footer end */}
      </footer>



    </div>



  )
}

export default Home
