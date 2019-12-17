const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  answer: { type: String },
  
  
})

const answer = mongoose.model('answer', answerSchema)
module.exports = answer