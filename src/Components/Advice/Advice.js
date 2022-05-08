import React, { useEffect, useState } from 'react';
import Speech from './Speech/Speech';
import './Advice.css';
const Advice = () => {
    const [advice, setAdvice] = useState([]);
    useEffect(() => {
        fetch('https://pacific-taiga-30587.herokuapp.com/advice').then(res => res.json()).then(data => setAdvice(data));
    }, []);

    return (
        <div>
            <p className='fs-2 text-center'>Writer Talks</p>
            <div className='advice w-100'>
                <div className='conatiner mx-5'>
                    <div className='container mb-5'><hr /></div>
                    <div className='advice-section'>
                        {
                            advice.map(speech => <Speech key={speech._id} speech={speech}></Speech>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advice;