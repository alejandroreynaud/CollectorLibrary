const { Book } = require('../models');

let getBookByISBN = async (req, res) => {
  try {

    const isbn = req.params.isbn;

    let book = await Book.findOne({
      where: { isbn: isbn }
    });

    if (!book) {
      return res.status(404).json({
        status: 404,
        message: "Book not found"
      });
    }

    res.status(200).json({
      status: 200,
      data: book
    });

  } catch (error) {

    res.status(500).json({
      status: 500,
      message: "Error fetching book",
      error: error.message
    });

  }
};


let createBook = async (req, res) => {

  try {

    const newBook = await Book.create(req.body);

    res.status(201).json({
      status: 201,
      data: newBook
    });

  } catch (error) {

    res.status(500).json({
      status: 500,
      message: "Error creating book",
      error: error.message
    });

  }

};

module.exports = {
  getBookByISBN,
  createBook
};