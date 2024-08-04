const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Compensation extends Model {}

Compensation.init(
  {
  job_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  job_type: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  worker_id: {
    type: DataTypes.INTEGER,
  },
  number_workers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cost_per_worker: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  zipcode: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  customer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  job_status: {
    type: DataTypes.BOOL,
    allowNull: false,
  },
  payment_status: {
    type: DataTypes.BOOL,
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