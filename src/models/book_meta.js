/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookMeta', {
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
    binfoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'book_info',
        key: 'id'
      },
      field: 'binfo_id'
    }
  }, {
    tableName: 'book_meta'
  });
};
