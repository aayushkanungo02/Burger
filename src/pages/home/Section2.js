import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Pizza brings people together with its irresistible blend of flavors and endless topping possibilities. Whether shared at a party or enjoyed during family movie night, it’s the perfect mix of comfort and joy. 🍕❤️`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Salad is a refreshing and nutritious dish, packed with vibrant colors and flavors. It's a perfect way to enjoy a healthy meal while staying light and energized. 🥗✨`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Delivery brings convenience and comfort, delivering your favorite meals right to your doorstep. It’s perfect for relaxing at home while enjoying delicious treats without any hassle. 🚚🍴`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Enjoying burgers with family is a fun, relaxed way to bond over
                delicious food. Everyone can customize their burger, share
                laughter, and create cherished moments together. It's a simple
                yet joyful treat for all ages! 🍔✨
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
