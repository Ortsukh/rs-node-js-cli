class CustomError extends Error {
 
  constructor(message, errorCode = 1) {
    super(message, errorCode);
    this.errorCode = errorCode;
    this.message = message;
    this.isCustom = true;
  }
}

module.exports = CustomError;
