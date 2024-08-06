const router = require('express').Router();

// const {testimonial} = require('../../models');
const Testimonial = require('../../models/Testimonials');

router.get('/', async (req, res) => {
    console.log("Hit route")
  try {
    console.log("Hit try")
    res.render('testimonials')
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
    console.log("Hit route")
    try {
        console.log("Hit try")
        const newTestimonial = await Testimonial.create(req.body)
        console.log(newTestimonial)
        res.json(newTestimonial)
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/', async (req, res) => {
    try {
      res.render('testimonials')
      
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/', async (req, res) => {
    try {
      res.render('testimonials')
      
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;