import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()
    const [Error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [formData,setFormData]= useState(
       { 
        email:"",
        password:""}
    )
    const HandleChange = (e)=>{
        setFormData({...formData,[e.target.id] : e.target.value})
    }
    const HandleSubmit = async (e)=>{
        e.preventDefault()
        try{
            setLoading(true)
            setError(false)
          const data = await fetch("/admin/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
          })
           const response = await data.json()
           setLoading(false)
           alert("signed in successfull")
           console.log("signed in successfully")
              navigate("/admin")
              if(!response.success){
                setError(true)
              }
        }catch(e){
            setError(true)
            setLoading(false)
            console.log(e)
        }
    }
  return (
    <div>

        <form onSubmit={HandleSubmit}>
          
            <input type="text" onChange={HandleChange} name="email" id="email" placeholder='email' />
            <input type="password" onChange={HandleChange} name="password" id="password" placeholder='password' />
            <button type="submit" disabled={loading}    >Log In</button>
        </form>
    </div>
  )
}

export default SignUp