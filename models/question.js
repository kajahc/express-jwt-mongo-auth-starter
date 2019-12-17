const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  question: { type: String },
  
  
})

const question = mongoose.model('question', questionSchema)
module.exports = question