import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { USERMODEL } from "../../../lib/Model/userSchema";
import { ConnectLink } from "../../../lib/db";



export async function PUT (request,content){
 
const id = content.params.id
console.log(id)
    const data = await request.json()

    console.log(data)



await mongoose.connect(ConnectLink)
.then((req)=>{
console.log("put api connected")
})



  let obj = {_id:id}


  const filter = await USERMODEL.findOneAndUpdate(obj,data)
 
    
    
    return NextResponse.json({
        data:filter,

        message:"edit user api",
        status:true
    })


}



