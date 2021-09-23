const express = require('express');
const router = express.Router({ mergeParams: true });

const bookController = require('../controllers/bookControllers');

router
    .route('/')
    .get(bookController.getAllBook)
    .post(bookController.postBook)

router
    .route('/:id')
    .get(bookController.getBook)
    .put(bookController.putBook)
    .delete(bookController.deleteBook);

router
    .route('/category/:categoryID')
    .get(bookController.getCategoryBook);



module.exports = router;