import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Musicplayer.css'
import CloseIcon from '@mui/icons-material/Close';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import { useParams } from "react-router-dom";
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { SendTimeExtension, SkipNext } from "@mui/icons-material";
import PauseIcon from '@mui/icons-material/Pause';
import { logDOM } from "@testing-library/react";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Loading from "../Searched_music/Loading";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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





export default function Musicplayer() {
   const navigate=useNavigate()
    const {id}=useParams()
    const [api,changeapi] =useState([])
    const [info,setinfo] =useState([])
    const [isplaylist,setplaylist]=useState(false)
    const [three,setthree]=useState(false)
    const [image,imageapi]=useState([])
    const [loading,setloading]=useState(true)
    const [apib,changeapib] =useState([])
    const [local,setlocal]=useState(getlocalitem())
    const [music,setmusic]=useState([])
    const [volume,setvolume]=useState([])
    const [songs,setsongs]=useState(music)
    const [isdownload,setdownload]=useState(false)
    const [length,setlength]=useState([])
    const [isplaying,setisplaying]=useState(true)
    const [ismute,setismute]=useState(false)
    const [islyrics,setlyrics]=useState(false)
    const [apilyrics,changeapilyrics]=useState([])
    const [apilyricsfound,changeapilyricsfound]=useState(false)

    const audioElem =useRef()
    const clickref=useRef()
    const clickref1=useRef()
    const videoplay=useRef()

   
    const playlist =JSON.parse(window.localStorage.getItem('details'))

    useEffect(()=>{

               axios.get(`https://saavn.me/songs?id=${id}`).then((data)=>{
               changeapi(data.data.data[0])
               setmusic(data.data.data[0].downloadUrl[3])
               imageapi(data.data.data[0].image[2])
            setloading(false)
               })
    
    },[])
         console.log("info",api)

  console.log("plaaaaa",playlist)
  

    useEffect(()=>{
      if(isplaying)
      {
         audioElem.current.play()
         videoplay.current.play()
      }
      else{
         audioElem.current.pause()
         videoplay.current.pause()
      }
    },[isplaying])

   // console.log("music",music);
    const value=(e)=>{
      console.log("e",e)
    }

    const playpause=()=>{
             setisplaying(!isplaying)
    }

// console.log(isplaying);

const onplaying=()=>{
   const duration=audioElem.current.duration
   const currentTime=audioElem.current.currentTime
   setlength({...length,"current":currentTime,"fulllength":duration})
   setmusic({...music,"progress":currentTime / duration *100 ,"length":duration})

}

const seekfront=(e)=>{
audioElem.current.currentTime= audioElem.current.currentTime+10

}

const seekback=(e)=>{
   audioElem.current.currentTime=audioElem.current.currentTime-10
   }

const onplaying1=()=>{
   const volume=audioElem.current.volume
   // console.log("volume change",volume);
   setvolume({...volume,"volume":volume *100})
}


const checkwidth=(e)=>{
   let width =clickref.current.clientWidth
   const offset=e.nativeEvent.offsetX
   const divprogress=offset / width *100
   audioElem.current.currentTime = divprogress / 100 * music?.length
}
const muteunmute =()=>{
   setismute(!ismute)
}

const checkwidth1=(e)=>{
let width =clickref1.current.clientWidth
const offset=e.nativeEvent.offsetX
const divprogress=offset / width *100
audioElem.current.volume=divprogress / 100
// console.log("correct value",audioElem.current.volume);
}

// console.log("audioelm",audioElem);

const playbutton=(id)=>{
 navigate(`/musicplayer/${id}`)
 window.location.reload () 
}
console.log("elm",audioElem)


const threedot=()=>{
   setthree(true)
}
const threedotclose=()=>{
   setthree(false)
}


const favorite =(details,id)=>{
     if(isplaylist==false){
      setlocal([  ...local,details])
      setplaylist(true)
     }
     
   

}
useEffect(()=>{
   localStorage.setItem('details',JSON.stringify(local))
 },[local])

 const moredetails=(lyrics,name)=>{
   setlyrics(true)
 }

 const download=(id,name)=>{
   if(isdownload==false)
   {

   
   const url=window.URL.createObjectURL(new Blob([id]))
   const link=document.createElement('a')
   link.href=url
   link.setAttribute('download',name+'-Majcrz-music.mp3')
   document.body.appendChild(link)
   link.click()
   setdownload(true)
  }

}


useEffect(()=>{

   axios.get(`https://saavn.me/lyrics?id=${id}`).then((data)=>{
   changeapilyrics(data.data.data)
   })
   .catch((error)=>{
      console.log(error.response.data.message)
      changeapilyricsfound(true)
   })
},[])


 const backtoimage=()=>{
   setlyrics(false)
 }
  return (
   <>
   <div className="scrollmain">

      <div className="main_background"  songs={music} setsongs={setsongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} >
         


         <div className="top">
            <div className="music_image">
               <div className="orginalimage">
                  {
                     loading==true?
                     <div><Loading/></div>:
                              <>
                  {
                     api==undefined ? 
                     <div style={{color:"white"}}>Api Error Please Reload Page</div>:
                     <>
                     {
                        islyrics==false ?
                        <img src={image?.link}/>:
                        <div className="lyrics">
                           <div className="lyrics-close"> 
                           <div className="back" onClick={backtoimage}>
                           <ArrowBackIcon style={{fontSize:"30px"}}/>
                           </div>
                           </div>
                       
                           <div className="lyrics-name">
                              {
                                 apilyricsfound==false ?
                                 <div className="lyrics_name1">
                             
                                 {apilyrics?.snippet}
                                 
                                 </div>:
                                      <div className="lyrics_name1">
                             
                                      The Lyrics Not Found
                                      
                                      </div>
                              }
                           
                           </div>
                           
                           <div className="lyrics-full">{apilyrics?.lyrics}</div>
                          
                        </div>
                     }
                     </>
                     
                  }
                  </>
               }
               </div>
            </div>
            <div className="scrollmusic">
            <div className="more_music">
            {
                   playlist==undefined ?
                  <div style={{color:"white"}}>There is No playlist Available Now</div>:
                  <>
                  
    {
      playlist.map((dta)=>
      <div className="orginalmusic"  onClick={() => { playbutton(dta?.id) }}>
      <div className="orginalmusic1">{dta?.name}</div>
      <div className="orginalmusic2"><img src={dta?.image[2]?.link}/></div>
        </div>
      )
    }
                  
                  
                  
                  
                  </>
            }
                 
               
             
    
               
               
            </div>
            </div>
         </div>
         <div className="music_range" onClick={checkwidth} ref={clickref}>
         <input type="range"  class="seek_slider "  style={{width:`${music?.progress+"%"}`}}/>
         </div>
         <div className="bottom">
            <div className="buttons">
               <div className="backward"><FastRewindIcon style={{fontSize:"50px"}} onClick={seekback}/></div>
              {
               isplaying!=true ?
              
               <div className="play" onClick={playpause}><PlayArrowIcon style={{fontSize:"50px"}}/></div>:
                    <div className="play" onClick={playpause}><PauseIcon style={{fontSize:"50px"}}/></div>
              
              }

              


               <div className="forward"><FastForwardIcon style={{fontSize:"50px"}} onClick={seekfront}/></div>
               <div className="time">
               <div class="current-time">{(length?.current/60).toFixed(2)}</div>
               <div>-</div>
               <div class="total-duration">{(length?.fulllength/60).toFixed(2)}</div>
               </div>
            </div>
            <div className="music_names">
               <div className="artist_pic">

               <video autoPlay loop muted ref={videoplay}>

                  <source src="/video.mp4" type="video/mp4"/>

               </video>
               </div>
               <div className="movies_slide">
                  {
                       api==undefined ?
                       <div style={{color:"white"}}>Api Error Please Reload Page</div>:
                       <>
             
                          {api?.album?.name}-{api?.name}
                       
                       </>
                  }
               
                  
                  </div>
                  {
                    
                     three==false ?
                     <div className="three_dots" onClick={threedot}><MoreVertIcon/></div>:
                     <div className="main-three" >
                        
                        <div className="close-button"onClick={threedotclose}><CloseIcon style={{fontSize:"30px"}}/></div>
                        {
                           isplaylist==false ?
                           <div className="add-to-playlist" onClick={() => { favorite(api,api?.id) }}>ADD TO PLAYLIST</div>:
                           <div className="add-to-playlist" onClick={() => { favorite(api,api?.id) }}>ALREADY ADDED</div>
                        }
                     
                        {
                           isdownload==false ?
                              <div className="download-music" onClick={()=>{download(api?.downloadUrl[4]?.link,api?.name)}}>DOWNLOAD MUSIC</div>:
                              <div className="download-music" onClick={()=>{download(api?.downloadUrl[4]?.link,api?.name)}}>ALREADY DOWNLOADED</div>
                        }
                     
                        <div className="details-about-song" onClick={() => { moredetails(apilyrics?.lyrics,apilyrics?.snippet) }}>LYRICS</div>
                        
                   </div>
                  }
               
            </div>
            <div className="volume_buttons"  >
{
              ismute!=true ?
              <div className="volume_button_org">
               <VolumeDownIcon style={{fontSize:"50px",}} onClick={muteunmute}/></div>:
               <div className="volume_button_org">
               <VolumeOffIcon style={{fontSize:"45px",paddingTop:"5px"}} onClick={muteunmute}/></div>
}
               
            <div className="volume_slider2" ref={clickref1} onClick={checkwidth1} >
                  <input type="range"   className="volume_slider" style={{width:`${volume?.volume+"%"}`}}></input>
            </div>
             
            </div>
         <div>
            <audio src={music?.link} ref={audioElem}  muted={ismute} onTimeUpdate={onplaying} onVolumeChange={onplaying1} autoPlay></audio>
         </div>
         </div>
       
      </div>
      </div>
   </>
  )
}
