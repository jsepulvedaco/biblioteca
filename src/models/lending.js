/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lending', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
    },
    refId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'book_ref',
        key: 'id'
      },
      field: 'ref_id'
    },
    personId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'person',
        key: 'id'
      },
      field: 'person_id'
    },
    sdate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'sdate'
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'edate'
    },
    delDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'del_date'
    },
    payDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'pay_date'
    }
  }, {
    tableName: 'lending'
  });
};
