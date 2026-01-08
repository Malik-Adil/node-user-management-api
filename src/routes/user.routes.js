const express = require('express');
const router = express.Router();
const { getMe, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user.controller');
const { protect } = require('../middlewares/auth.middleware');

// Swagger documentation: See src/docs/swagger/user.routes.yml
router.get('/me', protect, getMe);

router.get('/', protect, getUsers);

router.get('/:id', protect, getUser);

router.put('/:id', protect, updateUser);

router.delete('/:id', protect, deleteUser);

module.exports = router;
