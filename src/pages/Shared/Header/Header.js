import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Medi Life</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to='/aboutme'>About Me</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user ? <button onClick={handleSignout} className='btn btn-success'>sign out</button> :
                                <Nav.Link className='btn btn-danger' as={Link} to="login">Log In</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;