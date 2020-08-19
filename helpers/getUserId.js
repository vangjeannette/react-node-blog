require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const session = require('express-session');

function getUserId(req, res, next) {
  if (!session.token)
    return res.status(403).json({ auth: false, message: 'No token provided' });

  jwt.verify(session.token, process.env.TOKEN_SECRET_KEY, async (err, decoded) => {
    if (err)
      res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' });

    req.userId = decoded.id;
    next();
  });
}

module.exports = getUserId;