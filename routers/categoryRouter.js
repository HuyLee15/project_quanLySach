const express = require('express');
const router = express.Router({ mergeParams: true });

const categoryController = require('../controllers/categoryControllers');

router
    .route('/')
    .get(categoryController.getAllCategory)
    .post(categoryController.postCategory);
router
    .route('/:id')
    .get(categoryController.getCategory);

module.exports = router;