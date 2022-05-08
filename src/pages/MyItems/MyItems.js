import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Books from '../../Components/Books/Books';
import auth from '../../firebase.init';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [books, setBooks] = useState([]);
    const email = user?.email;
    // console.log(email);
    axios.post('http://localhost:5000/myItems', { email }).then(res => {
        const { data } = res;
        setBooks(data);
    })
    return (
        <div className='mt-5'>
            <Books books={books} />
        </div>
    );
};

export default MyItems;