/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookInfo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'type'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name'
    }
  }, {
    tableName: 'book_info'
  });
};
