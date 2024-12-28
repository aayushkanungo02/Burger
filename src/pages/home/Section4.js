import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Eating burgers together is all about sharing happiness, flavors,
                and memories. From the first bite to the last, it's filled with
                laughter, messy hands, and satisfied smiles. It’s a simple meal
                that turns into a celebration of togetherness, where every
                topping adds to the fun and every moment becomes unforgettable.
                🍔❤️
              </p>
              <ul>
                <li>
                  <p>
                    People eating burgers together create moments of joy and
                    connection, sharing laughs and savoring each bite. It’s a
                    casual, fun way to bond over good food and great company.
                    🍔😊
                  </p>
                </li>
                <li>
                  <p>A bite of joy, shared by everyone at the table.</p>
                </li>
                <li>
                  <p>
                    Burgers are the perfect excuse to gather around, talk, and
                    create stories. Each bite brings people closer, making
                    mealtime a cherished celebration. 🍔✨
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
