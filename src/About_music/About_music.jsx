import React, { useEffect, useState } from 'react'
import './About_music.css'
import axios from 'axios';
import { useParams } from 'react-router-dom'
export default function About_music() {
    const {id}=useParams()
    const [api,changeapi] =useState([])




    useEffect(()=>{

        axios.get(`https://saavn.me/lyrics?id=${id}`).then((data)=>{
        changeapi(data.data.data)
        })
   

    },[])
  console.log("song detail",api)
  return (


   <>
   

   <div className='mainlyrics'>

   </div>
   
   
   
   
   
   
   
   </>
  )
}
