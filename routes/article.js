require('dotenv').config();
const express = require('express');
const router = express.Router();
const Article = require('../models/Article');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// Get all articles
router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// Create one article
router.post('/article', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    text: req.body.text,
    imageUrl: req.body.imageUrl,
  });
  try {
    await article.save();
    // TODO Add article id to user articles array
    res.status(201).send(article);
  } catch (err) {
    res.send({ message: err.message });
  }
  res.send(article);
});

router.get('/article/:id', async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    res.status(404).send({ error: 'Article not found.' });
  }
  res.status(200).send(article);
});

module.exports = router;
