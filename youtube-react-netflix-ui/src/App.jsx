import "./app.scss"
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router";
import SearchList from "./components/list/searchlist";
import Featured from "./components/featured/Featured";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return ( 
  <div>
    <Routes>
      <Route
        path="/home"
        element={
          <>
          <Home/>
          </>
        }
      />
      <Route path="/search/:searchname"
       element={
        <>
        <Navbar/>
        <Featured/>
        <SearchList genre={`Action|Adventure|Animation|Children's|Comedy|Crime|Documentary|Drama|Fantasy|Film-Noir|Horror|Musical|Mystery|Romance|Sci-Fi|Thriller|War|Western`} />
        </>
        } />
    </Routes>
  </div>
  );
};

export default App;