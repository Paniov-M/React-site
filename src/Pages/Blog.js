import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row, Image, Figure, ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col md="3">
            <Image
              width={150}
              height={150}
              className="mr-3"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              alt="Generic placeholder"
            />
          </Col>
          <Col md="9">
            <Figure>
              <Figure.Caption className="ml-9 mt-1">
                <h5>Blog post</h5>
                <p className="ml-9">
                  Розробка сайтів на JavaScript - це захоплюючий процес, де
                  програмісти використовують потужну мову програмування, щоб
                  створювати динамічні та високоефективні веб-сайти. JavaScript
                  дозволяє реалізовувати інтерактивність, анімацію та взаємодію
                  користувачів, роблячи веб-проекти сучасними та привабливими.
                </p>
              </Figure.Caption>
            </Figure>
          </Col>

          <Col>
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
                <ListGroup variant="flush">
                    <ListGroupItem>HTML/CSS</ListGroupItem>
                    <ListGroupItem>JavaScript</ListGroupItem>
                    <ListGroupItem>Python</ListGroupItem>
                    <ListGroupItem>C++</ListGroupItem>
                </ListGroup>
            </Card>

            <Card className="mt-3" bg="light">
                <CardBody>
                    <CardTitle>Side widget</CardTitle>
                    <CardText>
                    Термін "widget" зазвичай використовується для позначення невеликого елементу інтерфейсу користувача, 
                    який вбудовується в веб-сайт, додаток або робочий стіл для виконання конкретної функції або надання конкретної інформації. 
                    Widget може включати в себе різноманітні елементи, такі як кнопки, підказки, графіки, календарі, часові стрілки тощо.
                    </CardText>
                </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
