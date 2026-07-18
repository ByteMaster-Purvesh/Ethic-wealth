const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/contact.controller');
const { contactValidationRules, validate } = require('../Middleware/validation.middleware');

// POST /api/contact
router.post('/', contactValidationRules(), validate, contactController.submitContact);

module.exports = router;
