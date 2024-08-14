const router = require('express').Router();
const { Compensation } = require('../../models')

router.get("/", async (req, res) => {
  try {
    const compData = await Compensation.findAll({ raw: true });
    if (!compData) {
      res.status(404).json({ message: "No Jobs yet!" });
      return compData;
    }
    console.log(compData)
    res.json(compData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;