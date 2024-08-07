const Testimonial = require('../models/Testimonials');
const Job = require('../models/Job')
const router = require('express').Router();
const {
  lookupZip,
  // distanceBetweenZips,
} = require ('zipcode-detail-lookup');

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
  const configJobData = jobData.map(job => {
    const lookup = lookupZip(job.zipcode.toString()) || {}
    const location = lookup?.city && lookup?.stateAbbreviation ? `${lookup.city}, ${lookup.stateAbbreviation}` : ''
    return {...job, location}
  })
  res.render('jobs', { configJobData });
  } catch (err) {
      res.status(500).json({ err, error: true });
  }
});

// add conditional if user is logged in
router.get('/login', async (req, res) => {
  res.render('login');
})

// add conditional if user is logged in
router.get('/sign-up', async (req, res) => {
  res.render('sign-up');
})

module.exports = router