var express = require('express');
var router = express.Router();

//add a question
router.post('/new', function(req, res, next) {
    res.send('generate a new question')
  });

  module.exports = router;