import React, { useState } from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../Images/socialIcon/googlepng.png';
import github from '../../../Images/socialIcon/github.png';
import facebook from '../../../Images/socialIcon/facebook.png';
import Loading from '../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [user, loaging, authError] = useAuthState(auth);
    const [error, setError] = useState('');

    // Getting previous location for redirecting
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    if (googleLoading || githubLoading || facebookLoading || loaging) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='d-flex flex-column justify-content-center mt-2'>

            {/* Divider */}
            <div className='d-flex justify-content-center'>

                <div className='d-flex w-25 align-items-center'>
                    <div className='w-100' style={{ height: '1px', backgroundColor: 'black' }}></div>
                    <div className='mx-2'>OR</div>
                    <div className='w-100' style={{ height: '1px', backgroundColor: 'black' }}></div>
                </div>
            </div>

            {/* Sign in with social network. --> google, github, facebook */}
            <div className='d-flex flex-column mx-auto mt-2'>
                {/* Google */}
                <button className='btn border border-dark rounded-pill px-4' style={{ backgroundColor: 'rgb(255,255,255)' }} onClick={() => {
                    signInWithGoogle();
                    if (googleError?.message) {
                        setError(googleError?.message);
                    }
                }}>
                    <img width='30px' src={google} alt="" /> <span className='text-black-50 fw-bold'>Continue with Google</span>
                </button>

                {/* Github */}
                <button className='btn border border-dark my-1 rounded-pill px-4' style={{ backgroundColor: 'rgb(255,255,255)' }} onClick={() => {
                    signInWithGithub();
                    if (githubError?.message) {
                        setError(githubError.message);
                    }
                }} >
                    <img width='30px' src={github} alt="" /> <span className='text-black-50 fw-bold'>Continue with Github</span>
                </button>

                {/* Facebook */}
                <button className='btn border border-dark rounded-pill px-4' style={{ backgroundColor: 'rgb(255,255,255)' }} onClick={() => {
                    signInWithFacebook();
                    if (facebookError?.message) {
                        setError(facebookError.message);
                    }
                }}>
                    <img width='30px' src={facebook} alt="" /> <span className='text-black-50 fw-bold'>Continue with Facebook</span>
                </button>
            </div>
            {/* || githubError || facebookError */}
            {
                error ? <p className='text-center mx-auto w-25 mt-2 border border-dark rounded rounded-6' style={{ color: 'red' }}>{error}</p> : ''
            }
        </div>
    );
};

export default SocialLogin;