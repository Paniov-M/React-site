import React,{Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import primusImg from '../assets/primus.jpg'
import castleImg from '../assets/castle.jpg'
import aestheticsImg from '../assets/aesthetics.jpg'


export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
               <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={primusImg}
                    alt="Primus"
                />
                <Carousel.Caption>
                    <h3>Primus image</h3>
                    <p>Love</p>
                </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={castleImg}
                    alt="Castle"
                />
                <Carousel.Caption>
                    <h3>Castle image</h3>
                    <p>Beauty</p>
                </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={aestheticsImg}
                    alt="Aesthetics"
                />
                <Carousel.Caption>
                    <h3>Aesthetics image</h3>
                    <p>Aesthetics</p>
                </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
        )
    }
}
