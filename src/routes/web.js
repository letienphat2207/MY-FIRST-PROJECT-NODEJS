const express = require('express')

const router = express.Router()
const {getHomepage,getABC,getSample} = require('../controllers/homeController')
//khai báo routes
//req (request), res(response) là 2 object trong môi trường Node.js
router.get('/', getHomepage)

router.get('/abc',getABC)

router.get('/hoidanit',getSample)

module.exports = router