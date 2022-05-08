import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Books from '../../Components/Books/Books';
import auth from '../../firebase.init';
const MyItems = () => {
    const defaultValue = 5;
    const [user] = useAuthState(auth);
    const [pages, setPages] = useState(0);
    const [totalBooks, setTotalBooks] = useState(0);
    const [books, setBooks] = useState([]);
    const email = user?.email;

    const [currentPage, setCurrentPage] = useState(0);
    const [size, setSize] = useState(5);
    useEffect(() => {
        fetch(`http://localhost:5000/books?size=${size}&page=${currentPage}&email=${email}`).then(res => res.json()).then(data => setBooks(data));
    }, [size, currentPage]);

    useEffect(() => {
        fetch(`http://localhost:5000/totalBooks?email=${email}`).then(res => res.json()).then(data => {
            setTotalBooks(data);
        });
        setPages(Math.ceil(totalBooks / size));
    }, [size, totalBooks]);

    return (
        <div className='mt-5'>
            <Books books={books} />
            <div className='d-flex justify-content-center'>
                {
                    [...Array(pages).keys()].map(page => <button onClick={() => setCurrentPage(page)} className={`btn ${page === currentPage ? 'selected' : ''} mx-1 fw-bold`} key={page}>{page}</button>)
                }
                <select defaultValue={defaultValue} onChange={(event) => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div>
    );
};

export default MyItems;