const express = require('express')
const router = express.Router()
const  {homeController} = require('../controllers/homeController')
const  {aboutController} = require('../controllers/aboutController')


router.use('/',homeController)
router.use('/about',aboutController)


module.exports = router