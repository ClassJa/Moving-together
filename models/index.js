const User = require('./User');
const Job = require('./Job');
const Compensation = require('./Compensation');

// A Job belongs to a Customer
Job.belongsTo(User, {
  foreignKey: 'customer_id'
});

// A Compensation is linked to a Job and Worker
Compensation.belongsTo(Job, {
  foreignKey: 'job_id'
});

// A Compensation is also linked to a Worker
Compensation.belongsTo(Job, {
  foreignKey: 'worker_id'
});

// A Job has many Compensations
Job.hasMany(Compensation, {
  foreignKey: 'job_id'
});

// A Customer has many Jobs
User.hasMany(Job, {
  foreignKey: 'customer_id'
});

module.exports = { User, Job, Compensation };