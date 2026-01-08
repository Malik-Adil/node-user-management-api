const User = require('../models/user.model');

class UserService {
  /**
   * Get user by ID (without password)
   * @param {string} id - User ID
   * @returns {Promise<Object|null>} User object or null
   */
  static async getUserById(id) {
    try {
      const user = await User.findById(id).select('-password');
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all users (without password)
   * @returns {Promise<Array>} Array of users
   */
  static async getAllUsers() {
    try {
      const users = await User.find().select('-password');
      return users;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user by email (without password)
   * @param {string} email - User email
   * @returns {Promise<Object|null>} User object or null
   */
  static async getUserByEmail(email) {
    try {
      const user = await User.findOne({ email }).select('-password');
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user by email with password (for authentication)
   * @param {string} email - User email
   * @returns {Promise<Object|null>} User object with password or null
   */
  static async getUserByEmailWithPassword(email) {
    try {
      const user = await User.findOne({ email }).select('+password');
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Check if user exists by email
   * @param {string} email - User email
   * @returns {Promise<boolean>} True if user exists, false otherwise
   */
  static async userExists(email) {
    try {
      const user = await User.findOne({ email });
      return !!user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create a new user
   * @param {Object} userData - User data (name, email, password)
   * @returns {Promise<Object>} Created user object
   */
  static async createUser(userData) {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update user by ID
   * @param {string} id - User ID
   * @param {Object} updateData - Data to update (name, email, etc.)
   * @returns {Promise<Object|null>} Updated user object or null
   */
  static async updateUser(id, updateData) {
    try {
      const user = await User.findByIdAndUpdate(
        id,
        updateData,
        {
          new: true,
          runValidators: true,
        }
      ).select('-password');
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete user by ID
   * @param {string} id - User ID
   * @returns {Promise<Object|null>} Deleted user object or null
   */
  static async deleteUser(id) {
    try {
      const user = await User.findByIdAndDelete(id);
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;

