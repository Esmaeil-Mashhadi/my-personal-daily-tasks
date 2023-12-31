import connectToDataBase from "@/config/db.connection";
import taskModel from "@/models/taskModel";
import { NextResponse } from "next/server";

export async function POST(req){
    await connectToDataBase() 
    const {total , date}= await req.json()
    const task = await taskModel.create({total , date})
    if(!task) return NextResponse.error('failed to add your daily hours')
    return NextResponse.json({status:201 , message:"your total working hour has submitted successully"})
}