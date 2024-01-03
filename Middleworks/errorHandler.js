const errorHandler = (err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json(
      err.message ||
        "Error de servidor, intenten nuevamente mas tarde o comuniquese  con el administrador"
    );
};

module.exports = errorHandler;