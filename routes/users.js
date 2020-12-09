var express = require('express')
var router = express.Router()

const { User } = require('../models')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await User.findAll()
  res.status(200).json(users)
})

module.exports = router
