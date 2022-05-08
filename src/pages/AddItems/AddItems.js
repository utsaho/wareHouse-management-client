import React from 'react';
import { useForm } from 'react-hook-form';
import './AddItems.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = '/my-items';
    const formSubmit = (book) => {
        const { email } = user;
        book.email = email;
        axios.post('https://pacific-taiga-30587.herokuapp.com/additems', book).then(res => {
            const { data } = res;
            if (data.insertedId) {
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
                navigate(from, { replace: true })
            }
        })
    }

    return (
        <div className='mx-auto add-items d-flex justify-content-center align-items-center'>
            <div className='mx-auto text-center bg-white p-5'>
                <h2 className='pb-3 mt-0'>Enter book details</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(formSubmit)}>
                    <input placeholder='Book name' className='mb-2 rounded rounded-4 border border-1 border-success' {...register("name", { required: true })} />
                    <textarea placeholder='Book description' className='mb-2 rounded rounded-4 border border-1 border-success' {...register("description",)} />
                    <input placeholder='Book price' className='mb-2 rounded rounded-4 border border-1 border-success' type="email" {...register("price",)} />
                    <input placeholder='Book cover photo URL' className='mb-2 rounded rounded-4 border border-1 border-success' type="text" {...register("img",)} />
                    <input placeholder='Quantity' className='mb-2 rounded rounded-4 border border-1 border-success' type="number" {...register("quantity",)} />
                    <input placeholder='Supplier name' className='mb-2 rounded rounded-4 border border-1 border-success' type="text" {...register("supplierName",)} />
                    <input className='mb-2 btn text-white' value="Add Items" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;