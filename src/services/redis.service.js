const { getRedisClient } = require('../config/redis');

class RedisService {
  // Set key-value pair with expiration
  static async set(key, value, expirationInSeconds = null) {
    try {
      const redisClient = getRedisClient();
      if (expirationInSeconds) {
        await redisClient.setEx(key, expirationInSeconds, JSON.stringify(value));
      } else {
        await redisClient.set(key, JSON.stringify(value));
      }
      return true;
    } catch (error) {
      console.error('Redis set error:', error);
      throw error;
    }
  }

  // Get value by key
  static async get(key) {
    try {
      const redisClient = getRedisClient();
      const value = await redisClient.get(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Redis get error:', error);
      throw error;
    }
  }

  // Delete key
  static async delete(key) {
    try {
      const redisClient = getRedisClient();
      await redisClient.del(key);
      return true;
    } catch (error) {
      console.error('Redis delete error:', error);
      throw error;
    }
  }

  // Check if key exists
  static async exists(key) {
    try {
      const redisClient = getRedisClient();
      const exists = await redisClient.exists(key);
      return exists === 1;
    } catch (error) {
      console.error('Redis exists error:', error);
      throw error;
    }
  }

  // Set expiration on existing key
  static async expire(key, seconds) {
    try {
      const redisClient = getRedisClient();
      await redisClient.expire(key, seconds);
      return true;
    } catch (error) {
      console.error('Redis expire error:', error);
      throw error;
    }
  }
}

module.exports = RedisService;

