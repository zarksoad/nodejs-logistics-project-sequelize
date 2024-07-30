const errorHandler = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    error: "Something bad happened",
    message: error.message,
  });
};

export default errorHandler;
