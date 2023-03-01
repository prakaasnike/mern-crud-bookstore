
const { Router } = require("express");
const booksController = require("../controllers/books-controller");


const router = Router();

router.get('/', booksController.getAllBooks);
router.post('/', booksController.addBook);
router.get('/:id', booksController.getBookById);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);



module.exports = router

//This route will provide all of the books
//# Shifted to controller and calling from controller
// let books;
// try {
//     books = await Book.find();

// } catch (error) {
//     console.log(error);
// }
// if (!books) {
//     return res.status(404).json({ message: "No books found" })

// } else {
//     return res.status(200).json(books);

// }