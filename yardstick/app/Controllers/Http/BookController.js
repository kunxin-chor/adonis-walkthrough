'use strict'
const Book = use('App/Models/Book');

class BookController {
  async index(context) {
    let books = await Book.all();
    books = books.toJSON();
    return context.view.render('show_books',{
      books
    })
  }
  create(context) {
    return context.view.render('create_book');
  }
  async processCreate(context) {
    let post = context.request.post();
    let newBook = new Book();
    newBook.title = post.title;
    newBook.isbn = post.isbn;
    newBook.author = post.author;
    await newBook.save();
    return "New book created";
  }
}

module.exports = BookController
