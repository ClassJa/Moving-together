const { User, Job, Compensation } = require('../models');
const userData = require('./userData.json');
const jobData = require('./jobData.json');
const compensationData = require('./compensationData.json');
const sequelize = require('../config/connection');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Sync the models with the database and drop existing tables

    // seed Users
    const users = await User.bulkCreate(userData);
    console.log('Users seeded successfully');

    // ... Jobs
    const jobs = await Job.bulkCreate(jobData);
    console.log('Jobs seeded successfully');

    // ... Compensations
    const compensations = await Compensation.bulkCreate(compensationData);
    console.log('Compensations seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();