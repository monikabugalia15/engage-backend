import "./historylistitem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ListItem(props) {


  const [state, setstate] = useState({'isHovered':false,'data':{}});
  const isHovered = state.isHovered;
  const statedata= state.data


  useEffect(()=>{
    if(props.imdbid<10){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt000000${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {'isHovered':prevstate.isHovered,'data':res.data}
        })
    });}
    else if(props.imdbid<100){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt00000${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {'isHovered':prevstate.isHovered,'data':res.data}
        })
    });}
    else if(props.imdbid<1000){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt0000${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {'isHovered':prevstate.isHovered,'data':res.data}
        })
    });}
    else if(props.imdbid<10000){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt000${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {'isHovered':prevstate.isHovered,'data':res.data}
        })
    });}
    else if(props.imdbid<100000){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt00${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {'isHovered':prevstate.isHovered,'data':res.data}
        })
    });}
    else if(props.imdbid<1000000){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt0${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {'isHovered':prevstate.isHovered,'data':res.data}
        })
    });}
    else if(props.imdbid>999999){
      axios.get(`https://imdb-api.com/en/API/Trailer/${props.apiId}/tt${props.imdbid}`)
      .then(res => {
        console.log(res.data)
        setstate(prevstate=>{
          return {'isHovered':prevstate.isHovered,'data':res.data}
        })
    });}
  },[]);
  const trailer =statedata.linkEmbed
    // "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  const imgsrc =statedata.thumbnailUrl

  let postandshow = ()=>{
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
  }
    return (
    <div
      className="listItem"
      style={{ left: isHovered && props.index * 225 - 50 + props.index * 2.5 }}
      onMouseEnter={() => setstate(prevstate=>{
        return {'isHovered':true,'data':prevstate.data}
      })}
      onMouseLeave={() => setstate(prevstate=>{
        return {'isHovered':false,'data':prevstate.data}
      })}
    >
      <img
        src={imgsrc}
        // src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
        alt=""
      />
      {isHovered && (
        <>
          <iframe  src={trailer} allow='autoplay;encrypted-media' loop={true} />
          <div onClick={postandshow}>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{statedata.title}</span>
              <span className="limit">+12</span>
              <span>{statedata.year}</span>
            </div>
            <div className="desc">
              {statedata.vieoDescription}
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus. */}
            </div>
            <div className="genre">{props.genre}</div>
          </div>
          </div>
        </>
      )}
    </div>
  );
}
