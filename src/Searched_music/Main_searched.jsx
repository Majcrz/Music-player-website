import React from 'react'
import "./Main_searched.css";
import Sidebars from '../Sidebar/Sidebars';
import Navbar from '../Navbar/Navbar';
import Searched_music from './Searched_music';
export default function Main_searched() {
  return (
    <>
    
    <div className='classroom'>
       
       <div >
         <Sidebars/>
       </div>
       <div className='classroom-nav-items'>
             <Navbar/>
<Searched_music/>
       </div>
   </div>
    
    
    
    
    
    
    </>
  )
}
