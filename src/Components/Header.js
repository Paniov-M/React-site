import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from './logo192.png';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';
import New from '../Pages/New';

export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar className="menu" collapseOnSelect expand="md">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="70"
                                width="70"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">   {/* вирівнювання по центру*/}
                                <Nav.Link className="header" href="/">ГОЛОВНА</Nav.Link>
                                <Nav.Link className="header" href="/about">ПРО НАС</Nav.Link>
                                <Nav.Link className="header" href="/contacts">ДОСТАВКА ТА ОПЛАТА</Nav.Link>
                                <Nav.Link className="header" href="/blog">КАТАЛОГ ТОВАРІВ</Nav.Link>
                                <Nav.Link className="header" href="/new">НОВИНКИ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts' element={<Contacts />} />
                        <Route path='/blog' element={<Blog />} />
                        <Route path='/new' element={<New />} />
                    </Routes>
                </Router>
            </>
        );
    }
}
