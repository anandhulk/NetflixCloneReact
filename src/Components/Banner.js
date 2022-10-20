import axios from "./Api/axios";
import { useEffect, useState } from "react";
import "./Banner.css"
import {API_KEY,IMAGE_URL} from "./Api/constants";

function Banner(){
    const [movie,setMovie]=useState({})

    const i=Math.floor(Math.random() *20) //to take random movie to show in banner

    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((res)=>{
            //console.log(res.data.results[i])
            setMovie(res.data.results[i])
        });
    },[])

    return(
        <div style={{backgroundImage:`url(${IMAGE_URL+movie.backdrop_path})`}}
        className="banner">
            <div className="content">
                <h1 className="title">{movie.name? movie.name : movie.title}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie.overview}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner;