import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Advice from '../../Components/Advice/Advice';
import Banner from '../../Components/Banner/Banner';
import Books from '../../Components/Books/Books';
import Contact from '../../Components/Contact/Contact';
const Home = () => {
    const size = 6;
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/books?size=${size}`).then(res => res.json()).then(data => setBooks(data));
    }, []);
    const navigate = useNavigate();
    return (
        <div className=' pt-5 pb-5'>
            <Banner></Banner>
            <p className='text-center mt-5 fs-2'>Bangla Books</p>
            <hr className='conatiner mx-5' />
            <Books books={books} del={false}></Books>
            <div className='manage-inventory d-flex justify-content-center'>
                <button onClick={() => navigate('/manage-items', { replace: true })} className='btn text-white fs-5'>Manage Inventories</button>
            </div>
            <Contact></Contact>
            <Advice></Advice>
        </div>
    );
};

export default Home;