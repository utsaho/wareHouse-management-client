import React from 'react';
import './Speech.css';
const Speech = ({ speech }) => {
    const { name, img, talk } = speech;
    return (
        <div className='speech shadow p-3 mb-5 bg-body rounded rounded-4 p-3'>
            <div>
                <img className='w-100 rounded rounded-4' src={img} alt="" />
            </div>
            <h3 className='text-center mt-2' >{name}</h3>
            <p>“{talk}”</p>
        </div>
    );
};

export default Speech;