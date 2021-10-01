const errorHandler = require('../middlewares/errorHandle');
const bookRouter = require('./bookRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');
const uploadRouter = require('./upload');
const authRouter = require('./auth');
const errorHandle = require('../middlewares/errorHandle');

module.exports = (app) => {
    app.use('/api/books', bookRouter);
    app.use('/api/categories', categoryRouter);
    app.use('/api/users', userRouter);
    app.use('/api', authRouter);

    app.set('view engine', 'ejs');
    app.set('views', './views');

    app.use("/", uploadRouter);
    app.use(errorHandle);
}