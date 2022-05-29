import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import RecommendList from "../../components/list/recommendlisst";
import HistoryList from "../../components/list/historylist";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured/>
      {/* <List genre={'comedy'}/> */}
      <RecommendList userid={1} />
      <HistoryList genre={`Action|Adventure|Animation|Children's|Comedy|Crime|Documentary|Drama|Fantasy|Film-Noir|Horror|Musical|Mystery|Romance|Sci-Fi|Thriller|War|Western`} />
      <List genre={'comedy'}/>
      <List genre={'animation'}/>
      <List genre={'horror'}/>
    </div>
  );
};

export default Home;
