import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      name: "xyz",
      feedback:
        "The quality and performance of Tycoon products are truly impressive! Great value for money"
    },
    {
      name: "xyz",
      feedback:
        "The quality and performance of Tycoon products are truly impressive! Great value for money"
    },
    {
      name: "xyz",
      feedback:
        "The quality and performance of Tycoon products are truly impressive! Great value for money"
    }
  ];

  return (
    <section className="sectionsix">
      <Container>
        <h2 className="testimonialTop mb-5 text-center">Testimonials</h2>

        <Row className="g-4 justify-content-center">
          {testimonials.map((item, index) => (
            <Col key={index} xs={12} md={4}>
              <div className="testimonial-card h-100">
                <p className="feedback">“{item.feedback}”</p>
                <h4 className="name">— {item.name}</h4>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;

