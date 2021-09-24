const { Router } = require('express');
const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router({ mergeParams: true });

router.route('/')
    .get(userController.getUser)
    .post(userController.postUser);
router.route('/:id')
    .delete(userController.deleteUser);
module.exports = router;