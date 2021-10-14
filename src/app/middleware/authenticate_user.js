const { User } = require("../models/user_model");
const { verify } = require("jsonwebtoken");

async function authenticate(req, res, next) {
  const authToken = request.headers.authorization;

  if (!authToken) throw new Error(error);

  verify(authToken, app.get("bb946b77d56bb2872677065b2440c58f"), function (err, decoded) {
    if (err) {
      return res.json({ success: false, message: "Falha ao tentar autenticar o token!" });
    } else {
      req.decoded = decoded;
      next();
    }
  });
}

module.exports = authenticate;
