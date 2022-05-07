import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';
const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, signupError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    const registerForm = async (event) => {
        event.preventDefault();
        const name = event.target.firstName.value + ' ' + event.target.lastName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        if (updateError?.message) {
            setError(updateError.message);
            toast.error('Something went wrong. Please try again!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else if (signupError?.message) {
            setError(signupError.message);
            toast.error('Something went wrong. Please try again!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.success('Your account created successfully. Please verify before continue', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"

            });
        }
    }

    return (
        <div>
            <div className='register-form'>
                <div className='mx-auto d-flex align-items-center text-black text-center'>
                    <div className='bg-light py-4 form'>
                        <h3 className='mt-4'>Create Account</h3>
                        <p>Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link> </p>
                        <form onSubmit={registerForm}>
                            <input className='w-25 pe-1 rounded rounded-1 border border-2' name='firstName' type="text" placeholder='First Name' required />
                            <input className='w-25 ps-1 rounded rounded-1 border border-2' name='lastName' type="text" placeholder='Last name' /> <br />

                            <input className='w-50 my-2 rounded rounded-1 border border-2' name='email' type="email" placeholder='Email' required /> <br />
                            <input className='w-50 rounded rounded-1 border border-2' name='password' type="password" placeholder='Password' required /> <br />

                            {/* Submit button */}
                            <input className={`btn mt-2 w-50 ${!agree ? 'disabled' : ''}`} type="submit" value="Sign up" /> <br />

                            {/* To continue, terms and condition must be checked */}
                            <input type="checkbox" onChange={(event) => setAgree(event.target.checked)} name="Terms & conditions" id="terms" />
                            <label className='ms-1' htmlFor="terms">I have read and agree to the <a className='text-decoration-none' href="https://policies.google.com/terms?hl=en-US" target='_blank' rel='noreferrer'>terms and conditions</a></label> <br />
                            {error && <p className='text-danger'>{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;