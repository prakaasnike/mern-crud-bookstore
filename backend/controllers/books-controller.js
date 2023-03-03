const Book = require('../models/Book');
//show all books
module.exports.getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();

    } catch (error) {
        console.log(error);
    }
    if (!books) {
        return res.status(404).json({ message: "No books found" })
    } else {
        return res.status(200).json({ books });
    }
}
//comments
module.exports.getBookById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    if (!book) {
        return res.status(404).json({ message: "No Book found" })

    } else {
        return res.status(200).json({ book });
    }
}

//Add new books
module.exports.addBook = async (req, res, next) => {
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image,
        });
        //save date to mongoose
        await book.save();
    }
    catch (error) {
        console.log(error);

    }
    if (!book) {
        return res.status(500).json({ message: "Unable to add" })

    } else {
        return res.status(201).json({ book });
    }
}
//update the books
module.exports.updateBook = async (req, res, next) => {
    const id = req.params.id;
    const { name, author, description, price, available, image } = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image,
        })
        book = await book.save();
    } catch (error) {
        console.log(error);
    }
    //validation
    if (!book) {
        return res.status(404).json({ message: "Unable to Update" })

    } else {
        return res.status(200).json({ book });

    }
}

//delete the books
module.exports.deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        book = await Book.findByIdAndRemove(id);

    } catch (error) {
        console.log(error);
    }
    //validation
    if (!book) {
        return res.status(404).json({ message: "Unable to delete by this id" })

    } else {
        return res.status(200).json({ message: "Book deleted successfully" });

    }
}