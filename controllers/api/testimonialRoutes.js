const router = require('express').Router();

const { where } = require('sequelize');
// const {testimonial} = require('../../models');
const Testimonial = require('../../models/Testimonials');

router.get('/', async (req, res) => {
  try {
    const allTestimonials = await Testimonial.findAll()
    res.json(allTestimonials)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
        const newTestimonial = await Testimonial.create(req.body)
        res.json(newTestimonial)
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
        const updatedTestimonial = await Testimonial.update(
            req.body,
            {
                where: {
                    id: req.params.id
            }
        },
    )
    res.json(updatedTestimonial)
    // res.json(updatedTestimonial)
}
  catch (err) {
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