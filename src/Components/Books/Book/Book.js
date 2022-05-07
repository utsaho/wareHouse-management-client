import React from 'react';
import './Book.css';
const Book = ({ book }) => {
    const { name, img, description, price, quantity, supplierName } = book;
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
                    <button className='btn text-light fw-bold mb-2'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Book;