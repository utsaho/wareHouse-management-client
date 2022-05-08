import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './Contact.css';
const Contact = (event) => {
    const { register, handleSubmit, reset } = useForm();
    const formSubmit = (data) => {
        axios.post('https://pacific-taiga-30587.herokuapp.com/request', data).then(res => {
            const { data } = res;
            if (data.insertedId) {
                toast.success('Your request on process');
            }
        })
        reset();
    }
    return (
        <div className='container mt-5 d-flex justify-content-center'>
            <div className='w-75 shadow-none p-3 mb-5 bg-light contact-form'>
                <p className='text-center fs-2'>Request for Book</p>
                <div><hr /></div>
                <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(formSubmit)}>
                    <input placeholder='Book name' className='mb-2 rounded rounded-4 border border-1 border-success' {...register("name", { required: true })} />
                    <input placeholder='Book writer' className='mb-2 rounded rounded-4 border border-1 border-success' {...register("writer", { required: true })} />
                    <input placeholder='Your name' className='mb-2 rounded rounded-4 border border-1 border-success' type="text" {...register("Requester name", { required: true })} />
                    <input placeholder='Your email' className='mb-2 rounded rounded-4 border border-1 border-success' type="email" {...register("email", { required: true })} />
                    <input placeholder='Quantity' className='mb-2 rounded rounded-4 border border-1 border-success' type="number" {...register("quantity",)} />
                    <input className='mb-2 btn btn-primary text-white w-50 mx-auto' value="Add Items" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;