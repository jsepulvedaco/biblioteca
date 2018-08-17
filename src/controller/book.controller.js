/**
 * Created by admin to 2017/5/8.
 */
const {BookService} = require('../services')

function getAll(req, res, next) {
    BookService.getAll({}, function (err, response) {
      if (!err) {
        response.rows = response.rows.map(function (row) {
          return row;
        })
        res.json(response)
      } else {
        res.status(500).json({
          message: err.message
        })
      }
    })
  }

module.exports = {
    getAll: getAll
}