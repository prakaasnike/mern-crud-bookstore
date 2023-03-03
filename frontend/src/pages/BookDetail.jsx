import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const BookDetail = () => {
    // This line is using the useParams hook to extract the id parameter from the URL.
    const { id } = useParams();
    //This line is using the useNavigate hook to get access to the navigation object, which allows the component to navigate programmatically.
    const history = useNavigate();
    //This line is creating a state variable book and its updater function setBook using the useState hook. The initial value of book is an object with empty string values for name, author, description, price, and image, and false for available.
    const [book, setBook] = useState({
        name: "",
        author: "",
        description: "",
        price: "",
        image: "",
        available: false
    });

    useEffect(() => {
        const fetchHandler = async () => {
            const { data } = await axios.get(`http://localhost:5000/books/${id}`);
            setBook(data.book);
        };
        fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        const { data } = await axios.put(`http://localhost:5000/books/${id}`, book);
        return data;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/books'));
    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;
        setBook(prevState => ({
            ...prevState,
            [name]: inputValue,
        }));
    };

    return <div>

        <form onSubmit={handleSubmit} className="mt-4 mx-auto max-w-lg border-b-4 border-black bg-gray-50 shadow-lg rounded-md p-10" action="#">
            <label className="mt-3 block">
                <input value={book.name} onChange={handleChange} type="text" placeholder="Enter Book Title" name="name"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
            </label>

            <label className="mt-3 block">
                <input value={book.author} onChange={handleChange} type="text" placeholder="Author" name="author"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
            </label>

            <label className="mt-3 block">
                <input value={book.description} onChange={handleChange} type="text" placeholder="Enter the book description" name="description"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
            </label>
            <label className="mt-3 block">
                <input value={book.price} onChange={handleChange} type="number" placeholder="Price" name="price"

                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
            </label>
            <label className="mt-3 block">
                <input value={book.image} onChange={handleChange} type="text" placeholder="Image Url" name="image"
                    className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
            </label>

            <label className="flex items-center my-4 cursor-pointer">
                <input checked={book.available} onChange={handleChange} type="checkbox" name="available" className="form-checkbox h-5 w-5 text-blue-600" />
                <span className="ml-2 text-gray-700">Available</span>
            </label>

            <div className="mt-4 sm:-mx-2 sm:flex sm:items-center">
                <Link to="/books"
                    className="w-full transform rounded-md border border-gray-200 px-4 py-2 text-sm font-medium capitalize tracking-wide text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 sm:mx-2 sm:w-1/2">
                    Cancel</Link>

                <button type="submit"
                    className="mt-3 w-full transform rounded-md bg-gray-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-1/2">
                    Update Book</button>
            </div>
        </form>
    </div>;
};

export default BookDetail;
