const errorHandler = require('../middlewares/errorHandle');
const bookRouter = require('./bookRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');
const uploadRouter = require('./upload');

module.exports = (app) => {
    app.use('/api/books', bookRouter);
    app.use('/api/categories', categoryRouter);
    app.use('/api/users', userRouter);

    app.set('view engine', 'ejs');
    app.set('views', './views');

    app.use("/", uploadRouter);

}