import React from 'react'
import {Routes,Route} from 'react-router-dom';

import './App.css'
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import SignUp from './Admin/SignUp';
import Admin from './Components/Admin';

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<SignUp/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
