import Navbar from "../../components/navbar/Navbar";
import "./video.scss";
import List from "../../components/list/List";
import RecommendList from "../../components/list/recommendlisst";
import VideoTag from "../../components/featured/videotag";
const Video = (props) => {
  return (
    <div className="home">
      <Navbar />
      <VideoTag imdbId={props.imdbId} apiId={props.apiId} />
      {/* <List genre={'comedy'}/> */}
      <RecommendList userid={1} />
      <List genre={'comedy'}/>
      <List genre={'animation'}/>
      <List genre={'horror'}/>
    </div>
  );
};

export default Video;
