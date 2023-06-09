const jwt = require('jsonwebtoken');

const Unauthorized = require('../errors/unauthorized');

const { authMessageUnauthorizedOne } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET = 'dev-secret' } = process.env;

// eslint-disable-next-line consistent-return
module.exports.auth = async (req, res, next) => {
  const { authorization } = await req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new Unauthorized(authMessageUnauthorizedOne));
  } else {
    const token = authorization.replace('Bearer ', '');
    let payload;
    try {
      payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    } catch (err) {
      next(new Unauthorized(authMessageUnauthorizedOne));
    }
    req.user = payload;
  }
  next();
};
