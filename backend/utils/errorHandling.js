const errorHandling = (err, req, res, next) => {
  // adding the cors headers to middleware
  res.header(`Access-Control-Allow-Origin`, `http://localhost:5173`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(
    `Access-Control-Allow-Headers`,
    `Content-Type, Authorization, Cookie`
  );
  res.header(`Access-Control-Allow-Credentials`, `true`);

  //returns error message if any error is passed to it
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong.",
  });
};

export default errorHandling;
