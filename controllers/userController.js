const User = require('../modules/User');
const asyncHandle = require('../middlewares/asyncHandle');

module.exports = {
    postUser: asyncHandle(async(req, res, next) => {
        const { name, age, pass } = req.body;
        const user = await User.create({ name, age, pass })

        res.json({
            error: 0,
            success: true,
            data: user
        })
    }),
    getUser: asyncHandle(async(req, res, next) => {
        const users = await User.find(); //.select("+pass");

        res.json({
            success: true,
            data: users
        })
    }),
    deleteUser: asyncHandle(async(req, res, next) => {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.json({
                error: 1,
                success: false,
                data: `cannot find book with ID ${req.params.id}`
            })
        }
        res.json({
            error: 0,
            success: true,
            data: `deleted this user`,
        });
    })
}