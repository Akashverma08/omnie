import {NextResponse} from "next/server";
import {connectDB} from "@/lib/mondoDB";
import User from "@/models/user";

export async function POST(request:Request){
    try{


        await connectDB();
        const formData=await request.formData();

        const username=formData.get("username") as string;
        const password=formData.get("password") as string;

        if(!username || !password){
            return NextResponse.json(
                {message:"Please fill all fields"},
                {status: 400 }
            )
        }

        const userDetails=await User.findOne({username});
        if(!userDetails){
            return NextResponse.json(
                {message:"user not found"},
                {status:401}
            );

        }

        if(userDetails.password !==password){
            return NextResponse.json(
                {message:"Password not match"},
                {status:401}


            )
        }

        return NextResponse.json(
            {message:"User Found", userId: userDetails._id.toString()},
            {status: 200}
        );
    



    }catch(err){
        console.log(err);
        return NextResponse.json(
            {message:"Something went wrong"},
            {status:401}
        )
    }

    

}