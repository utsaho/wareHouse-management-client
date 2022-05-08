import { Children } from 'react';
import useBooks from '../../hooks/useBooks';
import Book from './Book/Book';
import './Books.css';
const Books = ({ books, del, deleteBook }) => {
    // const { books, del } = props;
    // const {del} = props;
    //! console.log(del);
    return (
        <div className='container'>
            <div className='bookContainer'>
                {
                    books.map(book => <Book key={book._id} book={book} del={del} deleteBook={deleteBook}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;