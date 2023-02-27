import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebars from '../Sidebar/Sidebars'
import About_music from './About_music'
import './About_music_main.css'
export default function About_music_main() {
  return (
    <>
    
    
    <div className='classroom'>
       
       <div >
      <Sidebars/>
       </div>
       <div className='classroom-nav-items'>
           <Navbar/>
         <About_music/>
       </div>
   </div>
    
    
    
    
    
    
    
    
    </>
  )
}
