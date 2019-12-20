const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question'
  },
  answer: { type: Boolean },
  point_value: {type: Number},
  daily_double: {type: String},
  final_question: {type: Boolean},
   user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  game: {type: String}
})

const answer = mongoose.model('Answer', answerSchema)
module.exports = answer