import useBooks from '../../hooks/useBooks';
import Book from './Book/Book';
import './Books.css';
const Books = ({ books }) => {
    return (
        <div className='container'>
            <div className='bookContainer'>
                {
                    books.map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;