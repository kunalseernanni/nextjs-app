"use server"
import client from "@/db"

export async function signup(username:string, password:string){
    try{
        const user = await client.user.create({
            data:{
                username: username,
                password: password
            }
        })
        
        return true
    }catch(e){
        return false
    }
}