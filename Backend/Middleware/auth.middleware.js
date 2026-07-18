const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Get token from the authorization header or cookies
    const authHeader = req.headers['authorization'];
    
    // Check if the auth header starts with 'Bearer ', otherwise fallback to cookies
    let token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    
    if (!token && req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access Denied. No token provided.'
        });
    }

    try {
        // Verify token
        // Fallback to a default secret if process.env.JWT_SECRATE is undefined, though it should be in .env
        const secret = process.env.JWT_SECRATE || 'fallback_secret_key';
        
        const decoded = jwt.verify(token, secret);
        
        // Attach user info to the request object
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Invalid or expired token.'
        });
    }
};

module.exports = {
    verifyToken
};
