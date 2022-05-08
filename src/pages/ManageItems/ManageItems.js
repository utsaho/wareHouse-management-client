import React, { useEffect, useState } from 'react';
import Books from '../../Components/Books/Books';
import { toast } from 'react-toastify';
import './ManageItems.css';
import { useNavigate } from 'react-router-dom';
const ManageItems = () => {
    const defaultValue = 5;
    const [pages, setPages] = useState(0);
    const [totalBooks, setTotalBooks] = useState(0);
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [size, setSize] = useState(5);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/books?size=${size}&page=${currentPage}`).then(res => res.json()).then(data => setBooks(data));
    }, [size, currentPage, totalBooks]);

    useEffect(() => {
        fetch('http://localhost:5000/totalBooks').then(res => res.json()).then(data => setTotalBooks(data));
        setPages(Math.ceil(totalBooks / size));
    }, [size, totalBooks]);

    const deleteBook = (id) => {
        fetch(`http://localhost:5000/book/${id}`, {
            method: 'DELETE',
        }).then(res => res.json()).then(data => {
            if (data.deletedCount > 0) {
                const rem = books.filter(book => book._id !== id);
                setBooks(rem);
                setTotalBooks(totalBooks - 1);
                setCurrentPage(0);
                toast.success('Deleted Successfully');
            }
        })
    }
    return (
        <div className='mt-5 manage-items'>
            <Books books={books} del={true} deleteBook={deleteBook}></Books>
            <div className='manage-inventory d-flex justify-content-center mb-5'>
                <button onClick={() => navigate('/add-items', { replace: true })} className='btn text-white fs-5'>Add New Items</button>
            </div>
            <div className='d-flex justify-content-center'>
                {
                    [...Array(pages).keys()].map(page => <button onClick={() => setCurrentPage(page)} className={`btn ${page === currentPage ? 'selected' : ''} mx-1 fw-bold`} key={page}>{page}</button>)
                }
                <select defaultChecked={defaultValue} onChange={(event) => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="10">10</option>
                </select>
            </div>
        </div >
    );
};

export default ManageItems;