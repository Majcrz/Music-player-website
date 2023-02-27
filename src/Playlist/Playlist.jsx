import './Playlist.css'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Parallax, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import { useNavigate } from 'react-router-dom';
import "swiper/css/pagination";
import "swiper/css/navigation";
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import axios from 'axios';
import Error from '../Searched_music/Error';
export default function Playlist() {
    const navigate=useNavigate()
    const playlist =JSON.parse(window.localStorage.getItem('details'))
    console.log("playlist",playlist)



    const playbutton=(id)=>{
        
      navigate(`/musicplayer/${id}`)

      }
      

    const deletebutton =(id)=>{
       
        const filterdata=playlist.filter((pro)=>{
            return pro.id!=id
        })
        console.log("delete",filterdata)
        localStorage.clear("details");
        localStorage.setItem("details",JSON.stringify(filterdata));

    }





  return (


    <>
        <div className='playlist-main'>


          
            <div className='subbody1'>
            {
              playlist==undefined ?
              <div className='malayalam_song1'>
                
              <Error/>

              </div>:
              <div className='malayalam_song1'>PlayList</div>
            }
                  
                  <div className='malayalam_swiper1'>
                  <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper1"
      >
        {
       
                
       playlist?.map((details)=>
          <SwiperSlide>
          <div className='swipermain1'>
          <img src={details?.image[2]?.link}></img>
          <div className='cardbody1'> 
               <p className='card-sub-title1'>Song:{details?.name.split('').includes('(') == true ? details.name.replace(/ *\([^)]*\) */g, "") :details?.name}</p>             
               <p className='card-info1'>Singer:{details?.primaryArtists}</p>
               <div className='playbutton1'>
                <div className='playbutton2' onClick={() => { playbutton(details?.id) }}><PlayCircleIcon style={{fontSize:"55px",marginTop:"10px"}}/></div>
                <div className='deletebutton' onClick={() => { deletebutton(details?.id) }}><DeleteIcon style={{fontSize:"55px",marginTop:"10px"}}/></div>
               
               
               </div>
              
          </div>
          </div>
        
        </SwiperSlide>
       
          
          )
        }

      </Swiper>
                  </div>
           </div>

        </div>
    
    
    </>
  )
}
