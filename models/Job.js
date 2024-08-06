const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Job extends Model {}

Job.init(
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
    references: {
        model: "user",
        key: "user_id"
    },
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
    allowNull: true,
    references: {
        model: "user",
        key: "user_id"
    },
  },
  job_status: {
    type: DataTypes.BOOLEAN,
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
  modelName: 'job',
}
);

module.exports = Job;