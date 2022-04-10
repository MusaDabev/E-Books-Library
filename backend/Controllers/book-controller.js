const Book = require('../Model/Book.js')

const getAllBooks = async (req, res, nex) => {
    let books;
    try {
        books = await Book.find()
    } catch (error) {
        console.log(error);
    }

    if (!books) {
        return res.status(404).json({message: "No products found"})
    }
    return res.status(200).json({books: books})
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        book = await Book.findById(id)
    } catch (error) {
        console.log(error);
    }
    
    if (!book) {
        return res.status(404).json({message: "No book found"})
    }
    return res.status(200).json({book: book})
}

const addBook = async (req, res, next) => {
    const {name, author, description, price, available, image} = req.body
    let book;
    try {
        book = new Book({
            name: req.body.name,
            author,
            description,
            price,
            available,
            image
        })
        await book.save();
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        res.status(500).json({message: "Unable to add"})
    }
    return res.status(201).json({book})
}

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {name, author, description, price, available, image} = req.body
    let book;

    try {
        book = await Book.findByIdAndUpdate(id, {
            name, 
            author,
            description,
            price,
            available,
            image
        });
    book =   await book.save()
    } catch (error) {
        console.log(error);
    }
    if (!book) {
        res.status(404).json({message: "Unable to Update by this id"})
    }
    return res.status(200).json({book})

}


const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;

    try {
        book = await Book.findByIdAndRemove(id)
    } catch (error) {
        console.log(error);
    }
    
    if (!book) {
        return res.status(404).json({message: "Unable to delete by this id"})
    }
    return res.status(200).json({message: "Product succesfuly deleted"})
}



exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;