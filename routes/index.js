const express = require('express');
const router = express.Router();
var quizController = require('../controllers/quiz');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

// Author page.
router.get('/credits', (req, res, next) => {
    res.render('credits');
});
router.get('/quizzes',                     quizController.index);
module.exports = router;
