const mongoose=require("mongoose")

const taskSchema=mongoose.Schema({
    title:String,
    body:String,
    user:String
})

const TaskModel=mongoose.model("note",taskSchema)

module.exports={
    TaskModel
}