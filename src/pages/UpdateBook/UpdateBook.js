import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateBook = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Updating.. {id}</h2>
        </div>
    );
};

export default UpdateBook;