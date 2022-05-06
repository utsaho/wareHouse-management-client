import React from 'react';
import logo from '../../../../src/Images/logo/web-logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
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

                        {/* Checking user logged in or not, there are two opitons for unlogged person: login/signup */}
                        {
                            !user &&
                            <Nav.Link eventKey={3} as={Link} to='/register'>
                                <span className='text-dark'>Signup</span>
                            </Nav.Link>
                        }
                        {
                            !user && <Nav.Link eventKey={2} as={Link} to='/login'>
                                <span className='text-dark'>Login</span>
                            </Nav.Link>
                        }


                        {/* There are one opton for logged person: logout */}
                        {
                            user && <button className='btn' onClick={() => signOut(auth)}>logout</button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;