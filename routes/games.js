var express = require('express');
var router = express.Router();


//generate a new game
router.get('/new', function(req, res, next) {
    res.send('generate a new game')
  });
//get by id - continue play
router.get('/:id/game', function(req, res, next) {
    res.send('get by id')
  });
//history of games 
router.get('/history', function(req, res, next) {
    res.send('history of games')
  });
//final question
router.get('/:id/final', function(req, res, next) {
    res.send('final question')
  });
//get game info/score
router.get('/:id/score', function(req, res, next) {
    res.send('generate a new game')
  });
//update game and question (correct/incorrect)
router.put('/question/:id', function(req, res, next){
    res.send('question by id')
})



module.exports = router;