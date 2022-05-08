import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Book.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
const Book = ({ book, del, deleteBook }) => {
    const { _id, name, img, description, price, quantity, supplierName } = book;
    const navigate = useNavigate();

    return (
        <div className='container d-flex book bg-white shadow-lg p-3 mb-5 bg-body'>
            <div className='h-100 w-25'>
                <img className='w-100 pt-2 ps-2' src={img} alt="" />
            </div>
            <div className='w-75 ps-4 h-100'>
                <h4 className='pt-2 my-0'>{name}</h4>
                <p className='my-0 fs-5'>TK. {price}/p</p>
                <p className='my-0'><small><span className='text-muted fw-bold'>Description: </span> {`${description.length >= 80 ? description.slice(0, 80) : description}`}</small> {description.length >= 95 && <button className='btn ps-0 border border-0'>...</button>} </p>
                <p className='my-0'> <span className='text-muted fw-bold'>Quantity: </span> {quantity}</p>
                <div className='d-flex justify-content-between update-button'>
                    <p className='my-0'> <span className='text-muted fw-bold'>Supplier: </span> {supplierName}</p>
                    <div>
                        <button className='update btn text-light fw-bold mb-2' onClick={() => navigate(`/inventory/${_id}`)} >Update</button>
                        {
                            del && <button onClick={() => deleteBook(_id)} className='delete-button btn text-light fw-bold mb-2 ms-2' ><FontAwesomeIcon icon={faRemove} /> </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;