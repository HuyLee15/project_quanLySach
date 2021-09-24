const Category = require('../modules/Category');
const asyncHandle = require('../middlewares/asyncHandle')

module.exports = {
    getAllCategory: asyncHandle(async(req, res, next) => {
        const categories = await Category.find();
        res.json({
            error: 0,
            success: true,
            data: categories
        })
    }),
    getCategory: asyncHandle(async(req, res, next) => {
        const category = await Category.findById(req.params.id);
        res.json({
            error: 0,
            success: true,
            data: category,
        });
    }),
    postCategory: asyncHandle(async(req, res, next) => {
        const { name, description } = req.body;
        const category = await Category.create({
            name,
            description
        });

        res.json({
            error: 0,
            success: true,
            data: category,
        });
    })
}