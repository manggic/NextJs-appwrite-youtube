'use client'


import Signup from "@/components/Signup";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";



import React from 'react'





function SignupPage(){
     const router = useRouter()

      const { authStatus } = useAuth()

     if(authStatus){
        router.replace('/profile')

        return <></>
     }

     return <Signup />


}



export default SignupPage