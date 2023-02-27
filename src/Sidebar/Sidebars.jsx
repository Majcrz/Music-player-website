import React, { useState } from 'react'
import "./Sidebar.css";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebars() {
    const [isExpanded,setExpandedState]=useState(false)
    const menuitems=[
        {
                text:"Homepage",
                icon:<HomeIcon/>,
                link:"/"
        },
        {
            text:"Playlist",
            icon:<PlaylistPlayIcon/>,
            link:"/playlist"
    },
    ]
  return (
    <>
     <div className={isExpanded?'side-nav-container':'side-nav-container side-nav-container-NX'}>
        <div className='nav-upper'>
           <div className='nav-heading'>
       { isExpanded &&  ( <div className='nav-brand'>
                &nbsp;&nbsp;&nbsp;
                

            </div>)}
            <button className={isExpanded?'hamburger hamburger-in ':'hamburger hamburger-out'} onClick={()=>setExpandedState(!isExpanded)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
           </div>
           <div className="nav-menu">
            {
                menuitems.map(({text,link,icon})=>(
                    <a href={link}className={isExpanded?"menu-item":"menu-item menu-item-NX"}>
                        <div>{icon}</div>
                       
                       { isExpanded && <p  className="sing">{text}</p>}
                      
                      { !isExpanded && <div className="tooltipside">{text}</div>}
                    </a>
                ))
            }
           </div>

        </div>
        
    </div>
    </>
  )
}
