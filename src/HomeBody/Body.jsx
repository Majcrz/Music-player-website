import './Body.css'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import { useNavigate } from 'react-router-dom';
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import axios from 'axios';
import { Title } from '@mui/icons-material';
export default function Body() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [api,changeapi] =useState([])
  const [api1,changeapi1] =useState([])
  const [api2,changeapi2] =useState([])
  const [style, setStyle] = useState({display: 'none'});
  const [pass,changepass]=useState(["Sreekumar"])
  const [pass1,changepass1]=useState(["Dhanush"])
  const navigate=useNavigate()


         useEffect(()=>{
          axios.get('https://saavn.me/search/songs?query=malayalam%20songs&page=1&limit=20').then((details)=>{
      console.log("details",details.data.data.results)
            changeapi(details.data.data.results)
            
          })
         },[])

console.log("apineww",api)

const playbutton=(id)=>{
  navigate(`/musicplayer/${id}`)
}

const playbutton1=(id,title)=>{
  console.log(title)
navigate(`/musicplayer/${id}`)
}


useEffect(()=>{
  axios.get('https://saavn.me/search/songs?query=tamil%20songs&page=1&limit=20').then((details)=>{

  changeapi1(details.data.data.results)
    
  })
 },[])

 useEffect(()=>{
  axios.get('https://saavn.me/search/songs?query=english%20songs&page=1&limit=20').then((details)=>{

  changeapi2(details.data.data.results)
    
  })
 },[])




    console.log("api1",api2)

  return (
    <>
   <div className='scroll1'>
    <div className='mainbody'>
        
           <div className='subbody'>
            {
              api==undefined ?
              <div className='malayalam_song'>Api Error Please Reload Page </div>:
              <div className='malayalam_song'>Malayalam Songs</div>
            }
                  
                  <div className='malayalam_swiper'>
                  <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
       
                
          api?.map((details)=>
          <SwiperSlide>
          <div className='swipermain' onClick={() => { playbutton(details?.id) }}>
          <img src={details?.image[2]?.link}></img>
          <div className='cardbody'> 
               <p className='card-sub-title'>Song:{details?.name.split('').includes('(') == true ? details.name.replace(/ *\([^)]*\) */g, "") :details?.name}</p>             
               <p className='card-info'>Singer:{details?.primaryArtists}</p>
               <div className='playbutton'><PlayCircleIcon style={{fontSize:"25px",marginTop:"-20px"}}/></div>
          </div>
          </div>
          
        </SwiperSlide>
          
          )
        }

      </Swiper>
                  </div>
           </div>
           <div className='subbody'>
           {
              api==undefined ?
              <div className='malayalam_song'>Api Error Please Reload Page </div>:
              <div className='malayalam_song'>Tamil Songs</div>
            }
                  <div className='malayalam_swiper'>
                  <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          api1?.map((details)=>
          
          <SwiperSlide>
          <div className='swipermain' onClick={() => { playbutton1(details?.id) }}>
          <img src={details?.image[2]?.link}></img>
          <div className='cardbody'>
               <p className='card-sub-title'>Song:{details?.name.split('').includes('(') == true ? details.name.replace(/ *\([^)]*\) */g, "") :details?.name}</p>             
               <p className='card-info'>Singer:{details?.primaryArtists}</p>
               <div className='playbutton'><PlayCircleIcon style={{fontSize:"25px",marginTop:"-20px"}}/></div>
          </div>
          </div>
          
        </SwiperSlide>
          
          )
        }

      </Swiper>
                  </div>
           </div>
           
           <div className='subbody'>
            {
              api==undefined ?
              <div className='malayalam_song'>Api Error Please Reload Page </div>:
              <div className='malayalam_song'>English Songs</div>
            }
                  
                  <div className='malayalam_swiper'>
                  <Swiper
        slidesPerView={6}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
       
                
          api2?.map((details)=>
          <SwiperSlide>
          <div className='swipermain' onClick={() => { playbutton(details?.id) }}>
          <img src={details?.image[2]?.link}></img>
          <div className='cardbody'> 
               <p className='card-sub-title'>Song:{details?.name.split('').includes('(') == true ? details.name.replace(/ *\([^)]*\) */g, "") :details?.name}</p>             
               <p className='card-info'>Singer:{details?.primaryArtists}</p>
               <div className='playbutton'><PlayCircleIcon style={{fontSize:"25px",marginTop:"-20px"}}/></div>
          </div>
          </div>
          
        </SwiperSlide>
          
          )
        }

      </Swiper>
                  </div>
           </div>

    </div>
    
    </div>
    
    
    
    
    
    
    </>
  )
}
