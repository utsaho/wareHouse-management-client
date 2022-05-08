import React, { useEffect, useState } from 'react';
import Qna from './Qna/Qna';

const Blogs = () => {
    const [qna, setQna] = useState([]);
    useEffect(() => {
        fetch('https://pacific-taiga-30587.herokuapp.com/qna').then(res => res.json()).then(data => setQna(data))
    }, []);

    return (
        <div className='mt-5'>
            <p className='fs-2 text-center'>Most Asked Question</p>
            <div className='container'><hr /></div>
            <div>
                {
                    qna.map(q => <Qna key={q._id} q={q}></Qna>)
                }
            </div>
        </div>
    );
};

export default Blogs;