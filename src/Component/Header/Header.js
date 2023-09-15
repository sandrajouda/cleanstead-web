import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import logo from '../../../src/assets/logo.png';
import './Header.css';

function Header() {
    return (
        <Navbar  >
            <Container className='container'>
                <button className="butn1"> احجز الان</button>

                <Nav className="nav" >
                    <Nav.Link href="#">اتصل بنا</Nav.Link>
                    <Nav.Link href="#About">من نحن</Nav.Link>
                    <Nav.Link href="#"> الخدمات</Nav.Link>
                    <Nav.Link href="#"> الرئيسية</Nav.Link>

                </Nav>

                <h6 className='name'>
                    <span className='clean'>كلين </span>
                    <span className='stead'>ستيد</span>
                    <img
                        src={logo}
                        title='logo'
                    />
                </h6>


            </Container>

        </Navbar>
    );
};
export default Header;