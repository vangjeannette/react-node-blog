require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
var bodyParser = require('body-parser');
const session = require('express-session')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var jwt = require('jsonwebtoken');


// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Create one user
router.post('/register', async (req, res) => {
  const isUserAlreadyRegistered = await User.findOne({ email: req.body.email });
  if (isUserAlreadyRegistered) {
    return res.status(409).json({ message: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
  });
  try {
    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: 86400,
    });
    session.token = token;
    res.status(201).json({ message: 'Account created' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// login page: storing and comparing email and password
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const { email } = user;
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  bcrypt.compare(req.body.password, user.password, (_, result) => {
    if (result === false) {
      return res
        .status(401)
        .json({ auth: false, token: null, message: 'Incorrect password' });
    }
    const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: 86400,
    });
    session.token = token;
    res.status(200).json({ auth: true, token, email });
  });
});

module.exports = router;
