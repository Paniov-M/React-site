import React,{Component} from "react";
import CarouselBox from "../Components/CarouselBox";
import Carousel from 'react-bootstrap/Carousel';
import { CardImg, Container, CardDeck, Card, CardBody, CardTitle, CardText, Button } from "react-bootstrap";


export default class Home extends Component{
    render(){
        return(
            <>
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <div className="card-deck m-4">
                    <Card bg="warning" border="primary">
                        <CardImg 
                        variant="top"
                        src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1503919103-scaled.jpg"
                        />
                        <CardBody>
                            <CardTitle>Backend-developers</CardTitle>
                            <CardText>
                            Розробники - це креативні фахівці, які майстерно використовують свої навички програмування для створення інноваційних програм та рішень, рухаючи технологій вперед і впливаючи на спосіб, яким ми взаємодіємо з сучасним світом.
                            </CardText>
                            <Button variant="primary">About team</Button>
                        </CardBody>
                    </Card>
                    <Card bg="success">
                        <CardImg 
                        variant="bottom"
                        src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2021/03/improve-team-efficiency-productivity-header.jpg"
                        />
                        <CardBody>
                            <CardTitle>Designers</CardTitle>
                            <CardText>
                            Дизайнери - це творчі візіонери, які надають форму та естетичний вигляд продуктам, володіючи навичками композиції та відчуттям стилю. 
                            </CardText>
                            <Button variant="primary">About team</Button>
                        </CardBody>
                    </Card>
                    <Card bg="info">
                        <CardImg 
                        variant="top"
                        src="https://www.aces.edu/wp-content/uploads/2021/11/GettyImages-875599880-scaled.jpg"
                        />
                        <CardBody>
                            <CardTitle>Frontend-developers</CardTitle>
                            <CardText>
                            Фронтенд-розробники, з свого боку, перетворюють дизайнерські концепції в інтерактивні та функціональні веб-сайти, забезпечуючи користувачам захоплюючий та зручний досвід взаємодії з технологією.
                            </CardText>
                            <Button variant="primary">About team</Button>
                        </CardBody>
                    </Card>
                </div>
            </Container>
            </>
        )
    }
}
