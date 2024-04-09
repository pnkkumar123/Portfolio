import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMobileScreen } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return <>
 <div className="footer" style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:'center',gap:"1.5rem",height:"60px"}}>
 <a href="mailto:pankajkanwar420@gmail.com" target="_blank"><MdEmail />E-mail</a>

  <p><a href="https://www.linkedin.com/in/pankaj-kumar-722603128" target="_blank"><BsLinkedin /> Linkedin</a></p>

  <a href="tel:+917589227143"><FaMobileScreen />Call</a>

  <a href="https://wa.me/917589227143" target="_blank"><IoLogoWhatsapp />WhatsApp</a>

 </div>
  
  </>
}

export default Footer