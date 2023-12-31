const { default: mongoose } = require("mongoose")

const connectToDataBase = async()=>{
    await mongoose.connect('mongodb://127.0.0.1/taskManager')
    console.log('connected to data base');
}

export default connectToDataBase

