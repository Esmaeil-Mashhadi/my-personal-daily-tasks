import monthModel from "@/models/monthModel";
import { months } from "./constants";

const { default: connectToDataBase } = require("@/config/db.connection")
const { default: taskModel } = require("@/models/taskModel")

export const handleMonth = async(total)=>{
    const nthMonth = new Date().getMonth()
    const monthIndex = nthMonth - 1
    const monthName = months[monthIndex]
    const today = new Date().getDate()
    if(today == 1){
    await  connectToDataBase()
    const checkMonthExistence = await monthModel.findOne({'monthes.monthName' : monthName})
    if(checkMonthExistence){
        return
    }else{
        const saveMonth = await monthModel.updateOne({} , {$push :{monthes : {total , nthMonth , monthName}}} , {upsert:true})
        if(saveMonth.modifiedCount){
            const emptyPriorHours = await taskModel.deleteMany({})
            if(emptyPriorHours.deletedCount){
                return true
            }
        }
        return false
    }
    }
}