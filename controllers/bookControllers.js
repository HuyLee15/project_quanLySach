const Book = require('../modules/Book');
const { getCategory } = require('./categoryControllers');

module.exports = {
    getAllBook: async(req, res) => {
        try {
            const books = await Book.find();
            res.json({
                error: 0,
                success: true,
                data: books
            })
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message
            })
        }
    },
    getBook: async(req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            res.json({
                error: 0,
                success: true,
                data: book,
            });
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message,
            });
        }
    },
    postBook: async(req, res) => {
        try {
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
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message,
            });
        }
    },
    putBook: async(req, res) => {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });

            res.json({
                error: 0,
                success: true,
                data: book,
            });
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message,
            });
        }
    },
    deleteBook: async(req, res) => {
        try {
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
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message,
            });
        }
    },
    getCategoryBook: async(req, res, next) => {
        try {
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

        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message,
            });
        }

    }
}