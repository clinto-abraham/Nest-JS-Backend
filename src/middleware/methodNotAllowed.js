exports.methodNotAllowed = (req, res) => {
  return res
    .status(405)
    .send({ message: "Method not allowed, please check your server" });
};
