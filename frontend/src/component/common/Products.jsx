import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import ProductOne from "../../assets/img/10.jpg";
import ProductTwo from "../../assets/img/11.jpg";
import ProductThree from "../../assets/img/12.jpg";
import ProductFour from "../../assets/img/13.jpg";
import ProductFive from "../../assets/img/14.jpg";
import ProductSix from "../../assets/img/15.jpg";
import ProductSeven from "../../assets/img/16.jpg";

const Products = () => {
  const products = [
    ProductOne,
    ProductTwo,
    ProductThree,
    ProductFour,


  ];

  return (
    <section className="sectionFour">
      <Container fluid className="px-3 px-md-5">
        <h2 className="productTop text-center mt-4">New Arrivals</h2>

        <Row className="g-3 mt-3 justify-content-center fade">
          {products.map((img, index) => (
           <Col
           key={index}
           xs={12}
           sm={6}
           md={4}
           lg={3}
           className="d-flex"
         >
         
              <Card className="product-card w-100">
                <Card.Img src={img} className="product-img" />
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="product-text">
                    Tycoon Ceiling Fan 56″ Dynamic White Call for Price
                  </Card.Text>

                  <h6>
                    Price: $20{" "}
                    <span className="text-decoration-line-through">$30</span>
                  </h6>

                  <Link className="mt-auto">
                    <button className="pbtn">Add to Cart</button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;
