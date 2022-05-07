import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    fetch('http://localhost:5000/book', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ id })
    }).then(res => res.json()).then(data => setBook(data));
    return (
        <div>
            <h2>Updating.. {book.name}</h2>
        </div>
    );
};

export default UpdateBook;