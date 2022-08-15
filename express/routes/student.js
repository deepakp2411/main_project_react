const express = require("express");
const router = express.Router();
const { allStudents, deleteStudents} = require('../controllers/studentController.js')

router.get("/all" ,allStudents)

router.get("/delete/:id([0-9]{2})",deleteStudents)

module.exports = router ;
