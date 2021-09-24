class ErrorRespone extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
//https://dev.to/abubakarwase/global-error-handling-4dkd

module.exports = ErrorRespone;