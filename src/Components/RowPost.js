import React, { useEffect, useState } from 'react'
import axios from "./Api/axios";
import {IMAGE_URL} from './Api/constants';
import "./RowPost.css"

function RowPost(props) {

  const [movies,setMovies]=useState([])

  useEffect(() => {
    axios.get(props.url)
    .then((res)=>{
      console.log(res.data.results)
      setMovies(res.data.results)
    })
  }, [])
  

  return (
    <div className='row'>
        <h2 className=''>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj,index)=> <img key={index} className={props.islarge? "poster": "smallposter"} src={`${IMAGE_URL+obj.poster_path}`} alt="poster" /> )
          } 
        </div>
    </div>
  )
}

export default RowPost