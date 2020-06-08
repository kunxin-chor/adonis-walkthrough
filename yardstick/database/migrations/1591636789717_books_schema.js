'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments() // add auto-increment field
      table.timestamps() // add the created_at and updated_at field
      table.string("title", 100).notNullable();
      table.string('isbn', 100).notNullable();
      table.string('author', 100).notNullable();
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema
