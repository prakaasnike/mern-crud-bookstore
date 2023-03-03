import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Book = ({ book }) => {
    // Destructure the props object to access the individual book data
    const { _id, name, author, image, description, price } = book;
    const history = useNavigate();

    const deleteHandler = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/books/${_id}`);

            if (response.status === 200) {
                window.location.reload(); // refresh the page after the book has been deleted
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-32 md:w-48 border-2 rounded border-gray-100 shadow-sm">
            <div className="aspect-w-9 aspect-h-16">
                <img src={image} alt={name} className="object-cover" />
            </div>
            <div className='p-4 space-y-1'>
                <article className='text-xs'>By {author}</article> {/* Add a space after "By" */}
                <h3 className='font-bold text-gray-700 text-xs md:text-sm'>{name}</h3>
                <p className='text-xs font-light md:text-sm truncate ...'>{description}</p>
                <p className=''>{price}</p>
                <div className='justify-center flex-none md:flex space-y-2 md:justify-between md:space-y-0'>
                    <Link to={`/books/${_id}`} className='text-xs mr-2 py-1.5 px-4 text-gray-600 bg-gray-200 hover:bg-blue-300 hover:text-gray-500 rounded-md'>Update</Link>
                    <button onClick={deleteHandler} className='text-xs mr-2 py-1.5 px-4 text-gray-600 bg-red-200 hover:bg-red-400 hover:text-gray-100 rounded-md'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Book;
