const { default: mongoose, model, models } = require("mongoose");

const taskSchema = new mongoose.Schema({
    total : {type:"string"},
    date : {type : "string"}
})


const taskModel = models.task ||  model('task' ,  taskSchema)

export default taskModel