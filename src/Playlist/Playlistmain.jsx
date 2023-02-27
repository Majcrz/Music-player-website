import React from 'react'
import Playlist from './Playlist'
import './Playlistmain.css'
import Sidebars from '../Sidebar/Sidebars';
import Navbar from '../Navbar/Navbar';
export default function Playlistmain() {
  return (
    <>
    
    <div className='classroom'>
       
       <div >
         <Sidebars/>
       </div>
       <div className='classroom-nav-items'>
             <Navbar/>
<Playlist/>
       </div>
   </div>
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
