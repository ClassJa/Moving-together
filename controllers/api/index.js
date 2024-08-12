const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const projectRoutes = require('./projectRoutes');
const testimonialRoutes = require('./testimonialRoutes');
const signInRoutes = require('./signInRoutes')
const pricingRoutes = require('./pricingRoutes')

// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/users', userRoutes);
router.use('/jobs', jobRoutes);
router.use('/projects', projectRoutes);
router.use('/testimonials', testimonialRoutes)
router.use('/login', signInRoutes);
router.use('/pricing', pricingRoutes);
router.use('/welcome-back', signInRoutes)

module.exports = router;