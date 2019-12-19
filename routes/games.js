var express = require('express');
var router = express.Router();
var Question = require('../models/question')
var Answer = require('../models/answer')
const uuidv1 = require('uuid/v1')
//generate a new game
router.get('/new/:id', function(req, res, next) {
    // res.send('generate a new game')
//pick 6 categories and save them
//loop over 6 categories for questions (5 questions from 6 categories)
// final question 
// create a new game with all questions, including the final question
   let all_questions = []
   const gameid = uuidv1()
    Question.find({Category:"Music"})
    .limit(5)
    .exec((err, questions)=> {
        all_questions.push(questions)
        all_questions.map((question, index)=>{
            AnswerQ = new Answer ({
                question: question.id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid

            })
            AnswerQ.save(function (err, answer) {
                if (err) return console.error(err);
                console.log(answer);
                
            })
        })
    })
    Question.find({Category:"Social Media"})
    .limit(5)
    .exec((err, questions)=> {
        all_questions.push(questions)
        all_questions.map((question, index)=>{
            AnswerQ = new Answer ({
                question: question.id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid

            })
            AnswerQ.save(function (err, answer) {
                if (err) return console.error(err);
                console.log(answer);
                
            })
        })
        })  
    Question.find({Category:"Sports"})
    .limit(5)
    .exec((err, questions)=> {
        all_questions.push(questions)
        all_questions.map((question, index)=>{
            AnswerQ = new Answer ({
                question: question.id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid

            })
            AnswerQ.save(function (err, answer) {
                if (err) return console.error(err);
                console.log(answer);
                
            })
        })
    }) 
    Question.find({Category:"Games"})
    .limit(5)
    .exec((err, questions)=> {
        all_questions.push(questions)
        all_questions.map((question, index)=>{
            AnswerQ = new Answer ({
                question: question.id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid

            })
            AnswerQ.save(function (err, answer) {
                if (err) return console.error(err);
                console.log(answer);
                
            })
        })
    }) 
    Question.find({Category:"Computer Science"})
    .limit(5)
    .exec((err, questions)=> {
        all_questions.push(questions)
        all_questions.map((question, index)=>{
            AnswerQ = new Answer ({
                question: question.id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid

            })
            AnswerQ.save(function (err, answer) {
                if (err) return console.error(err);
                console.log(answer);
                
            })
        })
    }) 
    Question.find({Category:"Brands"})
    .limit(5)
    .exec((err, questions)=> {
        all_questions.push(questions)
        all_questions.map((question, index)=>{
            AnswerQ = new Answer ({
                question: question.id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid

            })
            AnswerQ.save(function (err, answer) {
                if (err) return console.error(err);
                console.log(answer);
                
            })
        })
    }) 
    Question.find({Category:"Final Question"})
    .limit(1)
    .exec((err, questions)=> {
        all_questions.push(questions)
        all_questions.map((question, index)=>{
            AnswerQ = new Answer ({
                question: question.id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid

            })
            AnswerQ.save(function (err, answer) {
                if (err) return console.error(err);
                console.log(answer);
                
            })
        })
    }) 
    res.send(gameid)
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
    res.send('score card')
  });
//update game and question (correct/incorrect)
router.put('/question/:id', function(req, res, next){
    res.send('question by id')
})
//delete a game 
router.delete('/question/:id', function (req, res, next){
    res.send('game deleted')
})
// new game function
Answer.find(gameid)

module.exports = router;