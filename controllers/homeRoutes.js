const Testimonial = require('../models/Testimonials');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {

  const tData = await Testimonial.findAll({raw: true})
    res.render('homepage', {tData})
  
    
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//   t
// })

module.exports = router