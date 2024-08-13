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
    console.log(newJob)
    res.status(200).json(newJob);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.put('/:job_id', async (req, res) => {
  const jobId = req.params.job_id; // Use req.params.job_id to get the job ID
  const updatedJobData = req.body; 

  try {
    const [rowsUpdated] = await Job.update(updatedJobData, {
      where: { job_id: jobId }
    });

    if (rowsUpdated > 0) {
      const updatedJobFromDB = await Job.findOne({ where: { job_id: jobId } });
      res.json(updatedJobFromDB);
    } else {
      res.status(404).json({ error: 'Job not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update job' });
  }
});


module.exports = router;
