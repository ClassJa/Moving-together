const router = require('express').Router();
// Import the Job model from the models folder
const { Job } = require('../../models');


router.get('/', async (req, res) => {
    try {
    const jobData = await Job.findAll();
    if (!jobData) {
        res.status(404).json({message: 'No Jobs yet!'});
        return;
    }
    const job = jobData.get({ plain: true });
    res.render('job', job);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Create a Job
router.post('/', async (req, res) => {
    try {
      const newJob = await Job.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newJob);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;
