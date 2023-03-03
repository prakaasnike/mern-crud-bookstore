
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    // import the useNavigate hook from the React Router library
    const BookPage = useNavigate();

    // set up state for the form inputs
    const [inputs, setInputs] = useState({
        name: '', description: '', price: '', author: '', available: '', image: '',
    });

    // create a handleChange function to update the state when the user types into the form
    const handleChange = (e) => {
        // get the name and value of the input that triggered the event
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        // update the state with the new value
        setInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // create a function to send the form data to the server using Axios
    const sendRequest = async () => {
        await axios
            .post("http://localhost:5000/books", {
                // convert input values to the correct data types for the server
                name: String(inputs.name),
                author: String(inputs.author),
                description: String(inputs.description),
                price: Number(inputs.price),
                image: String(inputs.image),
                available: Boolean(inputs.available),
            })
            .then((res) => res.data);
    };

    // create a function to handle form submission
    const handleSubmit = (e) => {
        // prevent the default form submission behavior
        e.preventDefault();
        console.log(inputs.available);

        // send the form data to the server and navigate to the book list page
        sendRequest().then(() => BookPage("/books"));
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="mt-4 mx-auto max-w-lg border-b-4 border-black bg-gray-50 shadow-lg rounded-md p-10" action="#">
                <label className="mt-3 block">
                    <input value={inputs.name} onChange={handleChange} type="text" placeholder="Enter Book Title" name="name"
                        className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
                </label>

                <label className="mt-3 block">
                    <input value={inputs.author} onChange={handleChange} type="text" placeholder="Author" name="author"
                        className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
                </label>

                <label className="mt-3 block">
                    <input value={inputs.description} onChange={handleChange} type="text" placeholder="Enter the book description" name="description"
                        className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
                </label>
                <label className="mt-3 block">
                    <input value={inputs.price} onChange={handleChange} type="number" placeholder="Price" name="price"

                        className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
                </label>
                <label className="mt-3 block">
                    <input value={inputs.image} onChange={handleChange} type="text" placeholder="Image Url" name="image"
                        className="block w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40" />
                </label>

                <label className="flex items-center my-4 cursor-pointer">
                    <input checked={inputs.available} onChange={handleChange} type="checkbox" name="available" className="form-checkbox h-5 w-5 text-blue-600" />
                    <span className="ml-2 text-gray-700">Available</span>
                </label>

                <div className="mt-4 sm:-mx-2 sm:flex sm:items-center">
                    <button type="button"
                        className="w-full transform rounded-md border border-gray-200 px-4 py-2 text-sm font-medium capitalize tracking-wide text-gray-700 transition-colors duration-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 sm:mx-2 sm:w-1/2">
                        Cancel</button>

                    <button type="submit"
                        className="mt-3 w-full transform rounded-md bg-gray-600 px-4 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-500 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 sm:mx-2 sm:mt-0 sm:w-1/2">
                        Add Book</button>
                </div>
            </form>
        </div>
    )
}

export default AddBook