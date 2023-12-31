const { default: mongoose } = require("mongoose")

const connectToDataBase = async()=>{
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI)
    console.log('connected to data base');
}

export default connectToDataBase

