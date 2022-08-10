const express = require("express");
const router = express.Router();
const { homeController } = require("../controllers/homeController.js");
const { aboutController } = require("../controllers/aboutController.js");

router.get("/", homeController);
router.get("/about", aboutController);


module.exports = router
