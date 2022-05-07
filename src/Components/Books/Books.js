import useBooks from '../../pages/hooks/useBooks';
import Book from './Book/Book';
import './Books.css';
const Books = () => {
    const [books] = useBooks();
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