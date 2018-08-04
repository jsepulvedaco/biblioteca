/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'name'
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'lastname'
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      field: 'email'
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'phone'
    },
    pcode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      field: 'pcode'
    },
    ptype: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: 'C',
      field: 'ptype'
    },
    passwd: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'passwd'
    }
  }, {
    tableName: 'person'
  });
};
