class Errors {
  static errorResponse(res, statusCode, errorTypeMessage, errorMessage) {
    return res
      .status(statusCode)
      .json({ message:
        `${errorTypeMessage}${errorMessage ? `: ${errorMessage}` : ''}`
      });
  };
}

module.exports = Errors;
