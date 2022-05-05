import React from 'react';
import logo from '../../../src/Images/logo/web-logo.png';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <Navbar className='my-0' collapseOnSelect expand="lg" bg="light" variant="light" sticky='top' >
            <Container>
                <Navbar.Brand as={Link} to='/'><img className='my-0 py-0' height={'50px'} src={logo} alt="Website logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/home'> <span className='text-dark'>Home</span> </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to='/blogs'> <span className='text-dark'>Blogs</span> </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;