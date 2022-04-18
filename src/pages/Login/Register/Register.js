import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating, error3] = useUpdateProfile(auth);

    const emailRef = useRef('')
    const passRef = useRef('')
    const nameRef = useRef('')
    const navigate = useNavigate()

    if(user){
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        // const name = event.target.name.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const name = nameRef.current.value;

        await createUserWithEmailAndPassword(email, pass);
        await updateProfile({ displayName:name });
        console.log('Updated profile');
        navigate('/home')
    }

    let errorElement;

    if (error2) {
        errorElement =
            <p className='text-danger'>Error: {error2.message}</p>
    }

    if (user2) {
        navigate('/home')
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (loading2) {
        return <Loading></Loading>
    }

    const navigateLogin = (event) => {
        navigate('/login')
    }

    if (user) {
        navigate('/home');
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-3'>please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="text" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={passRef} type="password" placeholder="Enter password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have an account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

            {errorElement}

            <button onClick={() => signInWithGoogle()} className='mt-2 btn btn-primary'>Register with google</button>
        </div>
    );

};

export default Register;