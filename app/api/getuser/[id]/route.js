
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { USERMODEL } from "../../../lib/Model/userSchema";
import { ConnectLink } from "../../../lib/db";



export async function GET (req,content){

let id =content.params.id

await mongoose.connect(ConnectLink)
.then((req)=>{
console.log("getusr api connected")
})




    let res= await USERMODEL.findOne({_id:id})

    
    
    return NextResponse.json({
        data:res,
        message:"get user ",
        status:true
    })


}



