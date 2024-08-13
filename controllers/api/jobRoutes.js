const router = require("express").Router();
// Import the Job model from the models folder
const { Job } = require("../../models");

//Get all Jobs HTML ROUTE
router.get("/", async (req, res) => {
  try {
    const jobData = await Job.findAll({ raw: true });
    if (!jobData) {
      res.status(404).json({ message: "No Jobs yet!" });
      return;
    }
    res.json(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a Job
router.post("/", async (req, res) => {
  try {
    const newJob = await Job.create({
      ...req.body,
      // user_id: 12345,
    });

    res.status(200).json(newJob);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

//starter code for job status change
router.put('/:id', async (req, res) => {
  const jobId = req.params.id;
  const updatedJobData = req.body; 

  try {
      // update the job in the database using Sequelize
      const updatedJobs = await Job.update(updatedJobData, {
          where: { id: jobId }
      });

      // Retrieve the updated book from the database
      const updatedJobFromDB = await Job.findByPk(jobId);

      // Send the updated book back to the client
      res.json(updatedJobFromDB);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update job' });
  }
});

module.exports = router;
