import client from "@/db"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
    const body = await req.json()
       try{ 
        const user = await client.user.create({
                data:{
                    username: body.username,
                    password: body.password
                }
            })
            return Response.json({ message: "Logged in with" ,user})
        }catch(e){
            console.error(e);
            Response.json({ error: "Internal server error" });
        }

    
}
