import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebars from '../Sidebar/Sidebars'
import Musicplayer from './Musicplayer'
import './Fullmusic.css'
export default function Fullmusic() {
  return (
    <>
           <div className='classroom'>
       
       <div >
      <Sidebars/>
       </div>
       <div className='classroom-nav-items'>
           <Navbar/>
          <Musicplayer/>
       </div>
   </div>
    </>
  )
}
