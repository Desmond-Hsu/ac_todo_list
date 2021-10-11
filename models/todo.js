const mongoose = require('mongoose')
const Schema = mongoose.Schema
const todoSchema = new Schema({
  name: {
    type: String,//資料型別為字串
    required: true,//必填欄位
  },
  isDone: {
    type:Boolean,
    default:false
  }
})
module.exports = mongoose.model('Todo', todoSchema)