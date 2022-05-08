import React from 'react';

const Qna = ({ q }) => {
    return (
        <div className='container shadow-sm p-3 mb-5 bg-body rounded'>
            <h2 className='text-center'>{q.question}</h2>
            <p><span className='fs-5'>Ans: </span> {q.ans}</p>
        </div>
    );
};

export default Qna;