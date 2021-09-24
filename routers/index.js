const bookRouter = require('./bookRouter');
const categoryRouter = require('./categoryRouter');
const userRouter = require('./userRouter');

module.exports = (app) => {
    app.use('/api/books', bookRouter);
    app.use('/api/categories', categoryRouter);
    app.use('/api/users', userRouter);
}