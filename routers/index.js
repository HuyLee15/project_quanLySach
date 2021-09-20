const bookRouter = require('./bookRouter');

module.exports = (app) => {
    app.use('/api/books', bookRouter);
}