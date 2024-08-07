const Testimonial = require('../models/Testimonials');
const Job = require('../models/Job')
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {

  const tData = await Testimonial.findAll({raw: true})
    res.render('homepage', {tData})
  
    
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Jobs - Render Job Cards
router.get('/jobs', async (req, res) => {
  try {
  const jobData = await Job.findAll({ raw: true });
  if (!jobData) {
      res.status(404).json({message: 'No Jobs yet!'});
      return;
  }
  // const job = jobData.get({ plain: true });
  console.log(jobData)
  res.render('jobs', { jobData });
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router