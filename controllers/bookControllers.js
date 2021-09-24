const Book = require('../modules/Book');
const { getCategory } = require('./categoryControllers');
const asyncHandle = require('../middlewares/asyncHandle');

module.exports = {
    getAllBook: asyncHandle(async(req, res, next) => {

        const books = await Book.find();
        res.json({
            error: 0,
            success: true,
            data: books
        })
    }),
    getBook: asyncHandle(async(req, res, next) => {
        const book = await Book.findById(req.params.id);
        res.json({
            error: 0,
            success: true,
            data: book,
        });
    }),
    postBook: asyncHandle(async(req, res, next) => {
        const { bookName, author, price, nxb, categoryID } = req.body;
        const book = await Book.create({
            bookName,
            author,
            price,
            nxb,
            categoryID
        });

        res.json({
            error: 0,
            success: true,
            data: book,
        });
    }),
    putBook: asyncHandle(async(req, res, next) => {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        res.json({
            error: 0,
            success: true,
            data: book,
        });
    }),
    deleteBook: asyncHandle(async(req, res, next) => {
        const book = await Book.findOneAndDelete(req.params.id);
        if (!book) {
            return res.json({
                error: 1,
                success: false,
                data: `cannot find book with ID ${req.params.id}`
            })
        }
        res.json({
            error: 0,
            success: true,
            data: {},
        });
    }),
    getCategoryBook: asyncHandle(async(req, res, next) => {
        const books = await Book.find({ categoryID: req.params.categoryID });
        if (!books) {
            return res.json({
                error: 1,
                success: false,
                data: `cannot find book with categoryID: ${req.params.categoryID}`,
            });
        }

        res.json({
            error: 0,
            success: true,
            data: books
        });
    })
}