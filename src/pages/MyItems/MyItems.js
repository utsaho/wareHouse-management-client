import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Books from '../../Components/Books/Books';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import './MyItems.css';
import { confirmAlert } from 'react-confirm-alert';
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
    }, [size, currentPage, totalBooks]);

    useEffect(() => {
        fetch(`http://localhost:5000/totalBooks?email=${email}`).then(res => res.json()).then(data => {
            setTotalBooks(data);
        });
        setPages(Math.ceil(totalBooks / size));
    }, [size, totalBooks]);

    const deleTe = (id) => {
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
    const deleteBook = (id) => {
        confirmAlert({
            title: "Confirm to delete",
            message: "Are you sure to delete this book?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleTe(id)
                },
                {
                    label: "No"
                }
            ]
        });
    }

    return (
        <div className='mt-5 my-items'>
            <Books books={books} deleteBook={deleteBook} del={true} />
            <div className='d-flex justify-content-center'>
                {
                    [...Array(pages).keys()].map(page => <button onClick={() => setCurrentPage(page)} className={`btn ${page === currentPage ? 'selected' : ''} mx-1 fw-bold`} key={page}>{page + 1}</button>)
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