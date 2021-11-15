const jwt = require("jsonwebtoken");
const SECRET = "showcasegabriella";

function authValidate(req, res, next) {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, SECRET);
  req.decoded = decoded.id;

  if (!decoded) return res.status(401).json({ error: "Unauthorized" });

  return next();
}

module.exports = authValidate;
