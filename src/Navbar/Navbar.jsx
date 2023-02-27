import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SearchIcon from '@mui/icons-material/Search';
import { IconContext } from 'react-icons';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import { useNavigate } from 'react-router-dom';
import ListIcon from '@mui/icons-material/List';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function Navbar() {
  const [navbar,setnavbar]=useState(false)
  const [api,changeapi] =useState([])
  const [list,setlist] =useState([])
   const navigate=useNavigate()


  //  useEffect(()=>{

  //   axios.get(`https://saavn.me/search/songs?query=${data.name}&page=1&limit=10`).then((data)=>{

  //     setlist(data.data.data.results)

  //   })
  
  // },[])


  const onchange=(event)=>{
    axios.get(`https://saavn.me/search/songs?query=${event.target.value}&page=1&limit=10`).then((data)=>{
    setlist(data.data.data.results)
    
  console.log(list)
    })
  }
  



  const name =(dta)=>{
           if (list?.length==0) {
            alert("type valid")
           }
           else{
            navigate(`/searched/${dta}`)
            window.location.reload () 
           }
  }


  const datalist=(dta)=>{

    navigate(`/searched/${dta}`)
    window.location.reload () 
  }


  const navbarbutton =()=>{
    setnavbar(true)
  }
  return (
    <>
    
    
    <div className='navbar'>
               <div className='website_name'>
                <div className='icon'><img src='/spotify.png' width="50px" height="50px"/></div>

                <div className='orginal_name'>MAJCRZ MUSIC</div>
               </div>
               <div className='search_bar'>
              
                  <div className='input_tag'>
                    <input type="text" list='states' id='states' placeholder='Search Song here' onChange={onchange} name="name" />
                    <datalist id='states'>
                             {
                              list?.map((details)=>
                              
                             <option className='option' onClick={() => { datalist(details?.name) }} ><img src={details?.image[2]?.link}/> {details?.name}</option>
                              )
                             }
                    </datalist>
                  </div>
                
                  <div className='search_icon'  onClick={() => { name(list?.name) }}  ><SearchIcon/></div>
               
         
                </div>    
               <div className='casting'>
                    <div className='notification'><NotificationsIcon/></div>
                    <div className='org_casting'><ConnectedTvIcon/></div>
                 
                </div>  

                {
                                   navbar==false ?
                                   <div className='toggle-button' onClick={navbarbutton}><ListIcon/></div>:
                                   <div className='new-navbar'>
                                    

                                   </div>
                }
               
        </div>
    
    
    
    
    
    
    
    </>
  )
}
