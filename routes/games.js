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
   const gameid = uuidv1()
    Question.find({Category:"Music"})
    .limit(5)
    .exec((err, questions)=> {
        console.log(questions)
        questions.map((question, index)=>{
            console.log(question)
            AnswerQ = new Answer ({
                question: question._id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid,
                final_question: false
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
        questions.map((question, index)=>{
            console.log(question._id)
            AnswerQ = new Answer ({
                question: question._id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid,
                final_question: false

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
        questions.map((question, index)=>{
            console.log(question._id)
            AnswerQ = new Answer ({
                question: question._id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid,
                final_question: false

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
        questions.map((question, index)=>{
            console.log(question._id)
            AnswerQ = new Answer ({
                question: question._id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid,
                final_question: false

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
        questions.map((question, index)=>{
            console.log(question._id)
            AnswerQ = new Answer ({
                question: question._id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid,
                final_question: false

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
        questions.map((question, index)=>{
            console.log(question._id)
            AnswerQ = new Answer ({
                question: question._id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid,
                final_question: false

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
        questions.map((question, index)=>{
            console.log(question._id)
            AnswerQ = new Answer ({
                question: question._id,
                user: req.params.id,
                point_value: (((index + 1)%5) * 200),
                game: gameid,
                final_question: true

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
    Answer.find({game: req.params.id})
    .populate('question')
    .exec((err, questions)=> {
        if(err) console.log(err)
        console.log(questions)
        res.json(questions)
    })
  });
//history of games 
router.get('/:id/history', function(req, res, next) {
    Answer.find({user: req.params.id})
    .select('gameid')
    .exec((err, gameid)=> {
        if(err) console.log(err)
        console.log(gameid)
        res.json(gameid)
    })
  });
//final question
router.get('/:id/final', function(req, res, next) {
    Answer.find({game: req.params.id, final_question: true})
    .populate('question')
    .exec((err, questions)=> {
        if(err) console.log(err)
        console.log(questions)
        res.json(questions)
    })
  });
//get game info/score
router.get('/:id/score', function(req, res, next) {
    Answer.find({game: req.params.id, answer: true})
    .populate('question')
    .exec((err, questions)=> {
        const total = Object.values(questions).reduce((t, {point_value}) => t + point_value, 0)
        if(err) console.log(err)
        console.log(total)
        res.json(total)
    })
  });
//update game and question (correct/incorrect)
router.put('/:answerId/question', function(req, res, next){
    Answer.findByIdAndUpdate(answerId, req.body, {new: true}, (err, answer) => {
        res.send(answer)
    }
)
//delete a game 
router.delete('/:id/delete', function (req, res, next){
    Answer.find({game: req.params.id})
    .remove()
    .exec((err, answers)=> {
       // delete answers
       console.log(answers)
        res.send(req.params.id)
    })
})

module.exports = router