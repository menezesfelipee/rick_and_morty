module.exports = (err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      mensage: err.message || "Internal Server Error",
    },
  });
};
