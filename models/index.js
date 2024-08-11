const User = require('./User');
const Job = require('./Job');
const Compensation = require('./Compensation');

Job.belongsTo(User, {
  foreignKey: 'customer_id'
});

Compensation.belongsTo(Job, {
  foreignKey: 'job_id'
});

// Compensation is linked to a Worker through User
Compensation.belongsTo(User, {
  foreignKey: 'worker_id'
});

Job.hasMany(Compensation, {
  foreignKey: 'job_id'
});

User.hasMany(Job, {
  foreignKey: 'customer_id'
});

module.exports = { User, Job, Compensation };