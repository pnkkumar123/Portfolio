import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';



const Contact = () => {
  const github = "https://github.com/pnkkumar123"
  const linkedin = "https://www.linkedin.com/in/pankaj-kumar-722603128/"
  const handleClick = (prop)=>{
  
      window.open(prop, '_blank'); 
   

  }
  return (
   <Wrapper>
     <div className='contact'>
       <div className="github">
      <button onClick={()=>handleClick(github)}><FaGithub/>Github</button>
       </div>
       <div className="linkedin">
       <button onClick={()=>handleClick(linkedin)}><FaLinkedin />Linkedin</button>
       </div>
    </div>
   </Wrapper>
  )
}
const Wrapper = styled.div`
display:flex;
flex-direction:row;
justify-items:center;
align-items:center;
margin:auto;
height:74vh;
.github {
  margin-bottom:50px;
  box-shadow:0 0 10px lightgreen;
  border-radius:8px;

}
.github button{
  width:100%;
}
.linkedin {
  margin-bottom:50px;
  box-shadow:0 0 10px lightgreen;
  border-radius:8px;

}
.linkedin button{
  width:100%;
}
`
export default Contact