import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from '../components/Book/Book'; // import the Book component

const URL = "http://localhost:5000/books"

// Define an async function to handle fetching books from the server
const fetchHandler = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
// Define the Books component
const Books = () => {
    // Declare the state variable to store the fetched books
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.books));
    }, []);
    // Log the fetched books to the console for debugging purposes
    console.log(books);

    return (
        <div >
            <ul className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
                {books && books.map((book, i) => (
                    <li className="" key={i}>
                        <Book book={book} /> {/* pass the book as a prop to the Book component */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Books;
