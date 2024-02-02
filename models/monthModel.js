const { default: mongoose, models, model } = require("mongoose");

const monthSchema = new mongoose.Schema({
    monthName :{type:String},
    nthMonth :{type:Number},
    total : {type:Number}
})


const monthesSchema = new mongoose.Schema({
    monthes: {type : [monthSchema]}
})



const monthModel = models.month || model('month' , monthesSchema)

export default monthModel