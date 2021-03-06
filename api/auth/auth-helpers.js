const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../data/config/index");

function tokenBuilder(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  };
  const options = {
    expiresIn: "1d",
  };
  const result = jwt.sign(payload, JWT_SECRET, options);

  return result;
}

module.exports = {
  tokenBuilder,
};
