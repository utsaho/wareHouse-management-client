import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const register = () => {
        signInWithGoogle();
        console.log('button clicked');
    }
    if (user) {
        console.log(user);
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Please register</h2>
            <button className='btn btn-primary' onClick={() => register()}>Signup</button>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;