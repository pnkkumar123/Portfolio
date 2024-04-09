import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';


const Admin = () => {
    const navigate = useNavigate()
       const [formData, setFormData] = useState({
        name:'',
        description:'',
        Backend:'',
        Frontend:'',
        Database:'',
        Payment:'',
        DevelopmentTools:'',
        VersionControl:'',
        Deployment:'',
        prjct:''
       })
       console.log(formData)
       const [error, setError] = useState(false)
       const [loading, setLoading] = useState(false)
       const HandleChange = (e) => {
       
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    

    const HandleSubmit = async (e) => {
        e.preventDefault(); 
    
        try {
            setLoading(true);
            setError(false);
            const response = await fetch("/project/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
    
            const data = await response.json();
            setLoading(false);
    
            console.log("added successfully");
            navigate("/projects");
            if (!data.success) {
                setError(true); // Set error state to true
                return; // Stop further execution
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };
    
    
  return (
    <div>
        <form onSubmit={HandleSubmit}>
        <input onChange={HandleChange} type="text" name="name" id="name" placeholder='name' />
        <input onChange={HandleChange} type="text" name="description" id="description" />
        <input onChange={HandleChange} type="text" name="Backend" placeholder='Backend' id="Backend" />
        <input onChange={HandleChange} type="text" name="Frontend" placeholder='Frontend' id="Frontend" />
        <input onChange={HandleChange} type="text" name="Database" placeholder='Database' id="Database" />
        <input onChange={HandleChange} type="text" name="Payment" placeholder='Payment' id="Payment" />
        <input onChange={HandleChange} type="text" name="DevelopmentTools" placeholder='DevelopmentTools' id='DevelopmentTools' />
        <input onChange={HandleChange} type="text" name="VersionControl" placeholder='VersionControl' id="VersionControl" />
        <input onChange={HandleChange} type="text" name="Deployment" placeholder='Deployment' id="Deployment" />
        <input onChange={HandleChange} type="text" name="prjct" id="prjct" placeholder='link'/>
        <button type='submit' disabled={loading}>Submit</button>
        </form>
        </div>
  )
}
// const Wrapper = styled.
export default Admin