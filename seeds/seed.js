const sequelize = require('../config/connection');
const { User, Compensation } = require('../models');

const userData = require('./userData.json');
const compensationData = require('./compensationData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const compData of compensationData) {
    await Compensation.create({
      ...compData,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }


  process.exit(0);
};

seedDatabase();