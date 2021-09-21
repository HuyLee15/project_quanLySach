const bookRouter = require('./bookRouter');
const categoryController = require('./categoryRouter');

module.exports = (app) => {
    app.use('/api/books', bookRouter);
    app.use('/api/categories', categoryController)
}