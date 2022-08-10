const express = require("express");
const router = express.Router();
const { studentController } = require("../controllers/studentContoller.js");
const myLogger = require("../middlewares/logger-middleware.js");

// router level use

router.use(myLogger);

router.get("/student", studentController);
router.get("/events", (req, res) => {
  res.send("Events");
});

module.exports = router;
