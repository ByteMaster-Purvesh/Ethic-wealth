const express = require('express');
const router = express.Router();
const authController = require('../Controllers/auth.controller');
const { verifyToken } = require('../Middleware/auth.middleware');
const { 
    registerValidationRules, 
    loginValidationRules, 
    validateAuth 
} = require('../Middleware/auth.validation.middleware');

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', registerValidationRules(), validateAuth, authController.register);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', loginValidationRules(), validateAuth, authController.login);

// @route   GET /api/auth/me
// @desc    Get user profile
// @access  Private
router.get('/me', verifyToken, authController.getMe);

// @route   POST /api/auth/logout
// @desc    Logout user
// @access  Private
router.post('/logout', verifyToken, authController.logout);

module.exports = router;