

'use client'


import Login from "@/components/Login";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";



import React from 'react'

function LoginPage(){
    const router = useRouter()

      const { authStatus } = useAuth()

     if(authStatus){
        router.replace('/profile')

        return <></>
     }

     return <Login />
}


export default LoginPage

