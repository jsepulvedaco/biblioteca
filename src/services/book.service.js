/**
 * Created by admin on 2017/5/9.
 */
const {Book} = require('../models')

/**
 * Returns list of books
 * @param {*} options 
 * @param {*} callback 
 */
function getAll (options, callback) {
  Book.findAndCount().then(function (data) {
    return callback(null, data)
  }).catch(function (err) {
    return callback(err, null)
  })
}

/**
 * Returns a book with a given id
 * @param {*} id 
 * @param {*} callback 
 */
function getById (id, callback) {
  Book.findById(id).then(function (manager) {
    if (!manager) {
      return callback(new Error('User does not exist'), null)
    } else {
      return callback(null, {
        id: manager.id,
        username: manager.username
      })
    }
  }).catch(function (err) {
    return callback(err, null)
  })
}

/**
 * Creates a new book
 * @param {*} $data 
 * @param {*} callback 
 */
function add ($data, callback) {
  Book.create($data).then(function (manager) {
    if (!manager) {
      return callback(new Error('User register failed'), null)
    } else {
      return callback(null, {
        id: manager.id,
        username: manager.username
      })
    }
  }).catch(function (err) {
    return callback(err, null)
  })
}

const BookService = {
  getAll:getAll,
  getById: getById,
  add: add
}

module.exports = BookService
