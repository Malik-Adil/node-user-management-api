const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');
const RedisService = require('../services/redis.service');

// Protect routes
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route',
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    // Check if token exists in Redis (for logout functionality)
    const storedToken = await RedisService.get(`token:${decoded.id}`);

    if (!storedToken || storedToken !== token) {
      return res.status(401).json({
        success: false,
        message: 'Token has been invalidated',
      });
    }

    // Get user from the token
    req.user = await UserService.getUserById(decoded.id);

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not found',
      });
    }

    // Normalize user ID for consistency (add id as alias for _id)
    req.user.id = req.user._id.toString();

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route',
    });
  }
};

module.exports = { protect };

