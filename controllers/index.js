// Import just the router express
const router = require('express').Router();
// Import the index.js from 'api' folder
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// const signInRoutes = require('./signInRoutes')

// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
// router.use('/signInRoutes', si)

module.exports = router;
