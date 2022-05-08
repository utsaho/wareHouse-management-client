import { useEffect, useState } from "react";

const useBooks = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://pacific-taiga-30587.herokuapp.com/books').then(res => res.json()).then(data => setBooks(data));
    }, []);
    return [books];
}

export default useBooks;