import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import {redirect} from "next/navigation"
export async function POST(request:Request){
    try{

        const formData=await request.formData();
        const username= formData.get("username") as string;
        const password=formData.get("password") as string;

        if(username != "admin" || password!="12345678"){
            return NextResponse.json(
                {message:"invalid Creditenial"},
                {status:401}
            )
        }

        const cookieStore=await cookies();
        cookieStore.set("LoggedIn","true",{
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite:"lax",
            path:"/"

        })

        //return NextResponse.json(
         //   {message:"Login Success"},
         //   {status:200}
        //);


    }catch(err){
        console.log(err);
        return NextResponse.json(
            {mesaages:"Something went Wrong"},
            {status:500}
        )

    }
    redirect("/dashboard")

    

}