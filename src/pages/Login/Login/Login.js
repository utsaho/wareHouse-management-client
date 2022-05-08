import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, signinError,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const emailRef = useRef(null);
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (signinError?.message && loading) {
        console.log(signinError.message);
        setError(signinError.message);
    }

    const login = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        // axios.post('http://localhost:5000/login', {email,}).then(res => {
        //     const { data } = res;
        //     if (data.insertedId) {
        //         toast.success('Your request on process');
        //     }
        // })
    }

    const resetPassword = () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email);
            toast.success('Reset email sent. Please check you email.');
        }
        else {
            toast.error('Please enter valid email');
        }

    }

    return (
        <div>
            <div className='register-form'>
                <div className='mx-auto d-flex align-items-center text-black text-center'>
                    <div className='bg-light py-4 form'>
                        <h3 className='mt-4'>Please Login</h3>
                        <p>New to FavBook? <Link to='/register' className='text-decoration-none'>Register</Link> </p>
                        <form onSubmit={login}>
                            <input className='w-50 my-2 rounded rounded-1 border border-2' ref={emailRef} name='email' type="email" placeholder='Email' required /> <br />
                            <input className='w-50 rounded rounded-1 border border-2' name='password' type="password" placeholder='Password' required /> <br />

                            {/* Submit button */}
                            <input className='btn mt-2 w-50' type="submit" value="Sign up" /> <br />
                            {signinError?.message && <p className='text-danger'>{signinError.message}</p>}
                        </form>
                        <p>Forget password? <button onClick={() => resetPassword()} className='m-0 p-0 btn text-primary'>Forget Password</button> </p>
                    </div>
                </div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;