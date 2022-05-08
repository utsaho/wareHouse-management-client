import { useState } from 'react';
import Books from '../../Components/Books/Books';
const Home = () => {
    const size = 6;
    const [books, setBooks] = useState([]);
    fetch(`http://localhost:5000/books?size=${size}`).then(res => res.json()).then(data => setBooks(data));
    return (
        <div className=' pt-5'>
            <p className='text-center fs-2'>Bangla Books</p>
            <hr className='conatiner mx-5' />
            <Books books={books}></Books>
        </div>
    );
};

export default Home;