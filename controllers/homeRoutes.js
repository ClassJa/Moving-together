const router = require('express').Router();

router.get('/', async (req, res) => {
  try {


    res.render('homepage')
    
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Jobs - Render Job Cards
router.get('/', async (req, res) => {
  try {
  const jobData = await Job.findAll({ raw: true });
  if (!jobData) {
      res.status(404).json({message: 'No Jobs yet!'});
      return;
  }
  // const job = jobData.get({ plain: true });
  res.render('job', job);
  } catch (err) {
      res.status(500).json(err);
  }
});


module.exports = router