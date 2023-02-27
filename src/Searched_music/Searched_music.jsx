import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Searched_music.css'
import axios from 'axios';
import Error from './Error';
import "swiper/css";
import "swiper/css/pagination";
import { Grid} from "swiper";
import { EffectCoverflow} from "swiper";
import "swiper/css/navigation";
import { useNavigate } from 'react-router-dom';
import "swiper/css/effect-coverflow";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Swiper, SwiperSlide } from "swiper/react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Pagination, Navigation } from "swiper";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Loading from './Loading';
import { preventDefault } from '@fullcalendar/core/internal';

const getlocalitem =()=>{
  let detail =localStorage.getItem('details')
  if(detail)
  {
    return JSON.parse(localStorage.getItem('details'))
  }
  else{
    return []
  }
}
const getlocalitem1 =()=>{
  let playlist =localStorage.getItem('playlist')
  if(playlist)
  {
    return JSON.parse(localStorage.getItem('playlist'))
  }
  else{
    return []
  }
}

export default function Searched_music() {


  const playlist1 =JSON.parse(window.localStorage.getItem('playlist'))
    const {id}=useParams()
    const [click,setclick]=useState(false)
    const [api,changeapi]=useState([])
    const [checkplay,setchckplay]=useState([])
    const [playlist,setplaylist]=useState(getlocalitem1())
    const [local,setlocal]=useState(getlocalitem())
   const [loading,setloading]=useState(true)
   const navigate=useNavigate()
   useEffect(()=>{

    axios.get(`https://saavn.me/search/songs?query=${id}&page=1&limit=20`).then((data)=>{
      console.log("serach data",data.data.data.results)
      changeapi(data.data.data.results)
      
      setloading(false)
    })
  
  },[])


  useEffect(()=>{
      console.log("plalist local",playlist1)
      setchckplay(playlist1)
  },[])

  const playbutton=(id)=>{

  navigate(`/musicplayer/${id}`)

}
// const filterdataval =(id)=>{
//   console.log("playlist111",playlist1)
//   const filterdata=playlist1?.filter((list)=>{
//     console.log("listmaster",list)
//     return list==id
    
//   })
//   console.log("listedreturn",filterdata)
//   setchckplay(filterdata)
// }



const favorite =(id,details)=>{
      setlocal([  ...local,details])
      setplaylist([...playlist,id])
      // filterdataval(id)

     
}
useEffect(()=>{
  localStorage.setItem('details',JSON.stringify(local))
},[local])

useEffect(()=>{
  localStorage.setItem('playlist',JSON.stringify(playlist))
},[playlist])


const download=(id,name)=>{
 const url=window.URL.createObjectURL(new Blob([id]))
 const link=document.createElement('a')
 link.href=url
 link.setAttribute('download',name+'.mp3')
 document.body.appendChild(link)
 link.click()
}

console.log("loghghgghg",checkplay)



  return (


    
<>

<div className='search_main'>


{
      loading==true?
      <div><Loading/></div>:
<>
  {api?.length!=0 ?

<div className='scroll'>

{
 api?.map((details)=>
 
<div className='fullbodymain'>

<div className='pic-and-details'>
  <div className='pic-data'><img src={details?.image[2]?.link}></img></div>
  <div className='details-data'>
    <div className='song-name'>{details?.name.split('').includes('(') == true ? details.name.replace(/ *\([^)]*\) */g, "") :details?.name}</div>
    <div className='artist-name'>Artist:<span style={{color:"grey"}}>{details?.primaryArtists}</span></div>
    <div className='album-name'>Album:<span style={{color:"grey"}}>{details?.album?.name}</span></div>
    <div className='Duartion'> Duration:<span style={{color:"grey"}}>{(details?.duration/60).toFixed(2)}&nbsp;minutes</span></div>
    <div className='release-date'></div>
    <div className='play-download'>
      <div className='play-button' onClick={() => { playbutton(details?.id) }}>
        <div className='main-button'><PlayArrowIcon/></div>
        <div className='main-icon'>Play</div>
      </div>
      <div className='download-button' onClick={()=>{download(details?.downloadUrl[4]?.link,details?.name)}}>
      <div className='main-button1'><CloudDownloadIcon/></div>
        <div className='main-icon1'>Download</div>
      </div>

 {  
 checkplay.filter((modal)=>

<div className='like-button'onClick={() => { favorite(details?.id,details) }}><FavoriteBorderIcon/></div>

  
  ) 
  }


      
      
    </div>
  </div>
</div>
<div className='related-title'></div>
<div className='related-data' ></div>

</div>

 )



}



</div>

  :
  <div><Error/></div>
  }
 </>
    }








</div>








</>
  )
}
