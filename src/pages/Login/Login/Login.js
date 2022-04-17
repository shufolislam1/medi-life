import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('')
    const passRef = useRef('')
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signInWithEmailAndPassword(email, pass)
    }

    if (user) {
        navigate('/home')
    }
    const navigateRegister = (event) => {
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <p>New to Medi Life ? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default Login;