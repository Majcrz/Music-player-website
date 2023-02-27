import React from 'react'
import "./Homepage.css";
import Sidebars from '../Sidebar/Sidebars';
import Navbar from '../Navbar/Navbar';
import Body from '../HomeBody/Body';
import Body_one from '../HomeBody/Body_one';

export default function Homepage() {
  return (
   <>
       <div className='classroom'>
       
       <div >
         <Sidebars/>
       </div>
       <div className='classroom-nav-items'>
             <Navbar/>
<Body/>
       </div>
   </div>
   </>
  )
}
