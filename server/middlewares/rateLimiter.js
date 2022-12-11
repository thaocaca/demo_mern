const rateLimit = require("express-rate-limit");

const authLitmiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  skipSuccessfulRequests: true,
});

module.exports = { authLitmiter };
