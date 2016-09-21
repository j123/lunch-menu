/**
 * apiKeyAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow API key authenticated user
 *                 Assumes that your login action in one of header sets
 `req.header['x-api-key'] = hogehoge;`
 *
 */
var apiKeyAuth = function (req, res, next) {

  var apiKey = '550e8400-e29b-41d4-a716-446655440000';
  // User is allowed
  if (req.headers['x-api-key'] === apiKey) {
    return next();
  }

  // User is not allowed
  return res.send(403);
};

module.exports = apiKeyAuth;
