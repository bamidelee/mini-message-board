var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Mini message board', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push(req.body)
  res.render('form', { title: 'Mini message board', messages: messages });
});

module.exports = router;
