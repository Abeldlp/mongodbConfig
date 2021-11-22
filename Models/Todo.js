const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  priority: Number 
})

module.exports = mongoose.model("Todo", todoSchema)
