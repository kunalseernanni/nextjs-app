"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Button ({ username, password }: {username: string, password: string}) {
    const router = useRouter(); 
    return <button onClick={()=>{
        axios.post("http://localhost:3000/api/user",{username,password})
        
        router.push("/")
    }} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign Up</button>
}