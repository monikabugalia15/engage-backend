import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./videotag.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VideoTag(props) {

  const [state, setstate] = useState({'data':{}});
  const statedata= state.data

  useEffect(()=>{
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/history/',
      data:{
        movieid: props.movieId,
        genre: props.genre,
        rating: 3.0,
        userid: 1
    }
    });
    if(props.imdbid<10){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt000000${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {'data':res.data}
        })
    });}
    else if(props.imdbid<100){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt00000${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return { 'data':res.data}
        })
    });}
    else if(props.imdbid<1000){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt0000${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {  'data':res.data}
        })
    });}
    else if(props.imdbid<10000){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt000${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {  'data':res.data}
        })
    });}
    else if(props.imdbid<100000){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt00${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {  'data':res.data}
        })
    });}
    else if(props.imdbid<1000000){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt0${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {  'data':res.data}
        })
    });}
    else if(props.imdbid>999999){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {  'data':res.data}
        })
    });}
  },[]);
  const trailer =statedata.linkEmbed
  return (
    <div className="featured">
      <iframe
        src={trailer}
      />
        {/* <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          adipisci repellendus eum quasi illo, velit numquam, maxime tempora
          sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic repudiandae
          temporibus eum earum?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div> */}
      </div>
  );
}
