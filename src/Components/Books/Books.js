import useBooks from '../../pages/hooks/useBooks';
import Book from './Book/Book';
import './Books.css';
const Books = ({ number }) => {
    const [totalBooks] = useBooks();
    const books = totalBooks.slice(0, number);
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