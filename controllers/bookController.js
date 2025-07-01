const Book = require('../models/book');

// List all books with optional search
exports.index = async (req, res) => {
  const search = req.query.search;
  let books = [];

  if (search) {
    books = await Book.find({
      title: { $regex: search, $options: 'i' }
    });
  } else {
    books = await Book.find();
  }

  res.render('books/index', { books, search });
};

// Show form to add a new book
exports.newForm = (req, res) => {
  res.render('books/new');
};

// Create a new book
exports.create = async (req, res) => {
  const { title, author, year } = req.body;
  await Book.create({ title, author, year });
  res.redirect('/books');
};

// Show book details
exports.show = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).send('Book not found');
  res.render('books/show', { book });
};

// Show form to edit a book
exports.editForm = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).send('Book not found');
  res.render('books/edit', { book });
};

// Update a book
exports.update = async (req, res) => {
  const { title, author, year } = req.body;
  await Book.findByIdAndUpdate(req.params.id, { title, author, year });
  res.redirect('/books');
};

// Delete a book
exports.delete = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.redirect('/books');
};
