import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Body.css'
import axios from 'axios';
export default function Body_one() {
  const {id}=useParams()
  const [api,changeapi]=useState([])
 const [loading,setloading]=useState(true)
useEffect(()=>{
      
  axios.get(`https://saavn.me/modules?language=malayalam`).then((details)=>{
          console.log("details",details?.data?.data?.albums)
  })



})






  return (
      
<>








</>




  )
}

