class CustomError extends Error {
  errorCode;
  message;
  constructor(message, errorCode = 1) {
    super(message, errorCode);
    this.errorCode = errorCode;
    this.message = message;
  }
}

module.exports = CustomError;
