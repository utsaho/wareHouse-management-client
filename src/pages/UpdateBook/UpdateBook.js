import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './UpdateBook.css';
const UpdateBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/book/${id}`).then(res => res.json()).then(data => setBook(data));
        console.log('called')
    }, [book.quantity]);

    const delivered = () => {
        book.quantity = book.quantity - 1;
        console.log(book);
        fetch(`http://localhost:5000/book/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(book)
        }).then(res => res.json()).then(data => {
            setBook(data);
        });
    }

    const addQuantity = (event) => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        book.quantity = book.quantity + parseInt(quantity) + 1;
        delivered();
        toast.success(`${book.name} added Successfully.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"

        });
        event.target.quantity.value = '';
    }

    return (
        <div>
            <div className='update-book container d-flex mt-5 shadow p-3 mb-5 bg-body rounded'>
                <div className='img-container'>
                    <img className='w-100' src={book.img} alt="" />
                </div>
                <div className='w-75  book-info'>
                    <div className='ms-5 info'>
                        <p className='fs-2 mb-0 pb-0'>{book.name}</p>
                        <p className='fs-5 mt-0 pt-0'><small className='text-muted fw-bold'>Supplier: </small> {book.supplierName}</p>
                        <p className='pb-0 mb-0'><span className='fw-bold'>Price:</span> TK. {book.price}/p</p>
                        <p className='pb-0 mb-0'><span className='fw-bold'>Description: </span>{book.description}</p>
                        <p className=''><span className='fw-bold'>Quantity: </span>{book.quantity}</p>
                        <button onClick={() => delivered()} className='btn border border-success delivered'>Delivered</button> <br />
                        <form onSubmit={addQuantity}>
                            <input className='mt-3 border border-1 border-success rounded rounded-4' type="number" name="quantity" id="" required />
                            <input className='ms-2 mt-3 border border-0 add-inventory' type="submit" value="Add Quantity" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='manage-inventory d-flex justify-content-center'>
                <button onClick={() => navigate('/manage-items', { replace: true })} className='btn text-white fs-5'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default UpdateBook;