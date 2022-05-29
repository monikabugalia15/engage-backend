import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./history.scss";
import HistroyList from "../../components/list/historylist";

const History = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <List genre={'comedy'}/> */}
      {/* <RecommendList userid={1} />
      <List genre={'comedy'}/>
      <List genre={'animation'}/>
      <List genre={'horror'}/> */}
      <HistroyList />
    </div>
  );
};

export default History;
