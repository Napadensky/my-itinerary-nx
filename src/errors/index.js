const { check, validationResult } = require('express-validator')
const { cityChecks } = require('./city.checks')

const checkErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'There are some errors',
      errors: errors.array(),
      success: false
    })
  }
  next()
}

module.exports = { cityChecks, checkErrors }