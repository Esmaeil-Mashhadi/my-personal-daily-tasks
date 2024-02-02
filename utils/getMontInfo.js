const { default: connectToDataBase } = require("@/config/db.connection")
const { default: monthModel } = require("@/models/monthModel")

export const getMonthInfo = async()=>{
    await connectToDataBase()
    const monthInfo = await monthModel.aggregate([
        {$match :{}},
        {$project:{monthes:1 , _id:0}},
        {$unwind:"$monthes"} 
    ])
    return monthInfo
}