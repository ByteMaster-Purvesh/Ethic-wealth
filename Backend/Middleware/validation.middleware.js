const { check, validationResult } = require('express-validator');

// Validation rules for contact form
const contactValidationRules = () => {
  return [
    check('name')
      .trim()
      .notEmpty().withMessage('Name is required')
      .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
    
    check('email')
      .trim()
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Please provide a valid email address')
      .normalizeEmail(),
    
    check('mobile')
      .trim()
      .notEmpty().withMessage('Mobile number is required')
      .matches(/^\d{10}$/).withMessage('Please provide a valid 10-digit mobile number'),
    
    check('subject')
      .trim()
      .notEmpty().withMessage('Subject is required')
      .isLength({ min: 3, max: 100 }).withMessage('Subject must be between 3 and 100 characters'),
    
    check('message')
      .trim()
      .notEmpty().withMessage('Message is required')
      .isLength({ min: 10, max: 1000 }).withMessage('Message must be between 10 and 1000 characters'),
  ];
};

// Middleware to check validation results
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(422).json({
    success: false,
    errors: extractedErrors,
  });
};

module.exports = {
  contactValidationRules,
  validate,
};
