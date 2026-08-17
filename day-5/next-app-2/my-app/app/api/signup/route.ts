import {NextResponse} from "next/server";
import {redirect} from "next/navigation";
import {connectDB} from "@/lib/mondoDB";
import User from "@/models/user";

export async function POST(request:Request){
    try{
        await connectDB();

        const formData=await request.formData();
        const username=formData.get("username") as string;
        const password=formData.get("password") as string;
        const city=formData.get("city") as string;
        const contact=formData.get("contact") as string;

        //basic validation
        if(!username || !password || ! city || !contact){
            return NextResponse.json(
                {message:"Please Fill all details"},
                {status:400}
            )
        }

        //User exist

        const userExist= await User.findOne({username});
        if(userExist){
            return NextResponse.json(
                {message:"User already exists"},
                {status:409}
            )
        }

        const user=await User.create({
            username,
            password,
            city,
            contact
        });


    }catch(err){
        console.log(err);
        return NextResponse.json(
            {message:"Something Went Wrong"},
            {status:500}
        )
    }
    redirect("/");
}