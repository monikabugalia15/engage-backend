import {
    ArrowBackIosOutlined,
    ArrowForwardIosOutlined,
  } from "@material-ui/icons";
  import { useRef, useState ,useEffect } from "react";
  import ListItem from "../listItem/ListItem";
  import "./recommendlist.scss";
  import axios from "axios";
  
  export default function RecommendList(props) {
    const drfurl='http://127.0.0.1:8000'
    const apiId = 'k_fwqh11bd' 
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    let i=0;
    const listRef = useRef();
  
    const handleClick = (direction) => {
      setIsMoved(true);
      let distance = listRef.current.getBoundingClientRect().x - 50;
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber(slideNumber - 1);
        listRef.current.style.transform = `translateX(${230 + distance}px)`;
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber(slideNumber + 1);
        listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      }
    };
  
  
    const [state ,setstate] = useState({'movies':[]});
    const moviedata= state.movies
  
  
    useEffect(()=>{
      axios.get(`${drfurl}/recommend/${props.userid}/`)
      .then(res => {
        // console.log(res)
        let movies= res.data
        let moviedata=[]
        movies.map(movie=>{
            moviedata.push(movie)
            return moviedata
        });
        setstate(prevstate=>{
          return {'movies': moviedata}
        })
  
      });
    },[]);
    // console.log(moviedata)
    return (
      <div className="list">
        <span className="listTitle">Recommendations</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />
          <div className="container" ref={listRef}>
          {moviedata.map(movie=>{
            i+=1;
            return <ListItem index={i-1} imdbid={movie.imdbId}  apiId={apiId} />
          })}
          
            {/* <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2} />
            <ListItem index={3} />
            <ListItem index={4} />
            <ListItem index={5} />
            <ListItem index={6} />
            <ListItem index={7} />
            <ListItem index={8} />
            <ListItem index={9} /> */}
          </div>
          <ArrowForwardIosOutlined
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
  }
  