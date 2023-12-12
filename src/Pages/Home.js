import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import winterSocks from '../Products/1.jpeg';  // Оновлено шлях

export default class Home extends Component {
  render() {
    return (
      <Container>
        <h2 className="text-center m-4">Our Products</h2>
        <Row>
        <Col md={4} className="d-flex flex-column align-items-center">
            <Link to="/Products/winter_socks/1">
            <img src={winterSocks} alt="Winter Socks" className="img-fluid image_links" />
            </Link>
            <p className="text-center">Зимові шкарпетки</p>
          </Col>
          {/* Додайте інші блоки Col для інших товарів */}
        </Row>
      </Container>
    );
  }
}
