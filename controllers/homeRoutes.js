const Testimonial = require('../models/Testimonials');
const Job = require('../models/Job')
const {Compensation} = require('../models')
const User = require('../models/User')

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

router.get('/pricing', async (req, res) => {
  try {
    const compData = await Compensation.findAll({raw: true})
    res.render('pricing', {compData})  } 
    catch (error) {
    
  }
});

// add conditional if user is logged in
router.get('/login', async (req, res) => {
  try {
    res.render('login')
  }
  catch(e) {
    res.status(404).json(e)
  }
 
})

// add conditional if user is logged in
router.get('/signup', async (req, res) => {
  res.render('signup');
})

router.get('/welcomeBack', async (req, res) => {
    console.log(req.session)
    console.log(req.session.user_id)
    const userInfo = await User.findOne({
      where: {
      user_id: req.session.user_id
    },
    raw: true
  })
  if (!userInfo) {
    res.status(400).json("Invalid User")
  }
  res.render('welcomeBack', {userInfo})
  })

// router.get('/welcomeBack', async (req, res) => {
//   const userInfo = await User.findOne({where: {
//     user_id: req.body.user_id 
//   }})
//   res.render('welcomeBack', userInfo)
// })
router.get('/createjob', async (req, res) => {
  res.render('createjob');
})


module.exports = router