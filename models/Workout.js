const { Schema, model } = require('mongoose')

module.exports = model('Workout', new Schema({
 text: String,
 isDone: Boolean
}))
