const Category = require('../modules/Category');

module.exports = {
    getAllCategory: async(req, res) => {
        try {
            const categories = await Category.find();
            res.json({
                error: 0,
                success: true,
                data: categories
            })
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message
            })
        }
    },
    getCategory: async(req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            res.json({
                error: 0,
                success: true,
                data: category,
            });
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message,
            });
        }
    },
    postCategory: async(req, res) => {
        try {
            const { name, description } = req.body;
            const category = await Book.create({
                name,
                description
            });

            res.json({
                error: 0,
                success: true,
                data: category,
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