const router = require('express').Router();

const {testimonial} = require('../../models')

router.get('/', async (req, res) => {
  try {
    res.render('testimonials')
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      res.render('testimonials')
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/', async (req, res) => {
    try {
      res.render('testimonials')
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/', async (req, res) => {
    try {
      res.render('testimonials')
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router