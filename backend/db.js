const mongoose = require('mongoose')
const { boolean, string } = require('zod')

mongoose.connect("mongodb+srv://aryanxvz:aryan0709@cluster0.qvmhxgy.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    desccription: String,
    completed: Boolean
})

const todo = mongoose.model ('todos', todoSchema)

mnodule.exports = {
    todo: todo
}