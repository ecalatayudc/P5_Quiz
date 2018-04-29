const express = require('express');
const models = require("../models");
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Author page.
router.get('/credits', (req, res, next) => {
    res.render('credits');
});
router.get('/quizzes', (req, res, next) => {
       const quizzes = models.index.findAll();

    res.render('views/quizzes.ejs', {quizzes});
});


// Routes for the resource /quizzes
module.exports = router;
