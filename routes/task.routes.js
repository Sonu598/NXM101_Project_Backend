const express = require("express")
const { TaskModel } = require("../model/task.model")
const jwt = require("jsonwebtoken")

const taskRouter = express.Router()


taskRouter.get("/tasks",async (req, res) => {
    const task=await TaskModel.find()
    res.send(task)
})

taskRouter.post("/task/create", async (req, res) => {
    const payload = req.body
    const task = new TaskModel(payload)
    await task.save()
    res.send({ "msg": "Task created" })
})

taskRouter.patch("/update/:id", async (req, res) => {
    const taskID=req.params.id
    const payload=req.body
    await NoteModel.findByIdAndUpdate({_id:taskID},payload)
 
     res.send({"msg":`Task with id${taskID} has been updated`})
 })

taskRouter.delete("/delete/:id", async (req, res) => {
   const taskID=req.params.id
   await NoteModel.findByIdAndDelete({_id:taskID})

    res.send({"msg":`Task with id${taskID} has been Deleted`})
})

module.exports = {
    taskRouter
}