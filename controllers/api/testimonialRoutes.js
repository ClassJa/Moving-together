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
                    testimonial_id: req.params.id
            }
        },
        // req.body
    )
    res.json(updatedTestimonial)
}
  catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
        const deletedTestimonial = await Testimonial.destroy(
            {
                where: {
                    testimonial_id: req.params.id
                },
            });
        res.status(200).json(deletedTestimonial)
      
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;