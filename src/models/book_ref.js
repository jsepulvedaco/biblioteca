/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookRef', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    bookId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'book',
        key: 'id'
      },
      field: 'book_id'
    },
    ref: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      field: 'ref'
    }
  }, {
    tableName: 'book_ref'
  });
};
