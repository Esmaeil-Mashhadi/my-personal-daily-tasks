const { default: taskModel } = require("@/models/taskModel")
const { default: connectToDataBase } = require("../config/db.connection")

const decadeInfo = async()=>{
    await connectToDataBase()
    const data = await taskModel.find()
    console.log(data);
    console.log('updated');
    const sortedData = { }
     sortedData.firstDec =  data.slice(0 , 10).reduce((acc , curr)=> { return acc += Number(curr.total)},0)
     sortedData.secondDec = data.slice(10, 20).reduce((acc , curr)=> { return acc += Number(curr.total)},0)
     sortedData.thirdDec  = data.slice(20).reduce((acc , curr)=> { return acc += Number(curr.total)},0)

  return sortedData
   
}

export default decadeInfo