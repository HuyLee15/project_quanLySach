const express = require('express');
const router = express.Router({ mergeParams: true });

const bookController = require('../controllers/bookControllers');
const authRouter = require('../controllers/authController');

router
    .route('/')
    .post(bookController.postBook);
router.get('/', authRouter.authenticateToken, bookController.getAllBook);

router
    .route('/:id')
    .get(bookController.getBook)
    .put(bookController.putBook)
    .delete(bookController.deleteBook);

router
    .route('/category/:categoryID')
    .get(bookController.getCategoryBook);



module.exports = router;