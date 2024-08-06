const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Testimonial extends Model {}

Testimonial.init(
  {
    testimonial_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date_of_submission: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_review: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isAlphanumeric: true,
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'testimonial',
  }
);

module.exports = Testimonial;