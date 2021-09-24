const User = require('../modules/User');

module.exports = {
    postUser: async(req, res) => {
        try {
            const { name, age, pass } = req.body;
            const user = await User.create({ name, age, pass })

            res.json({
                error: 0,
                success: true,
                data: user
            })
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message
            })
        }
    },
    getUser: async(req, res) => {
        try {
            const users = await User.find(); //.select("+pass");

            res.json({
                error: 0,
                success: true,
                data: users
            })
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message
            })
        }
    },
    deleteUser: async(req, res) => {
        try {
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
        } catch (error) {
            res.json({
                error: 1,
                success: false,
                data: error.message,
            });
        }
    }
}