const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Compensation extends Model {}

Compensation.init(
  {
  comp_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
worker_id: {
    type: DataTypes.INTEGER,
},
job_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
compensation: {
    type: DataTypes.INTEGER,
    allowNull: false,
},
payment_status: {
        type: DataTypes.BOOLEAN,
    allowNull: false,
},
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'compensation',
}
);

module.exports = Compensation;