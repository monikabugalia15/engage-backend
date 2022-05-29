import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import "./navbar.scss";


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const inputref = useRef()
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const navigate = useNavigate()
   const clickhandler =()=>{
     navigate(`/search/${inputref.current.value}`)
   }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          {/* <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F655273814519908010%2F&psig=AOvVaw2ESMs25EP7Gcss1ojKL_lO&ust=1653923489290000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCz4qP_hPgCFQAAAAAdAAAAABAD"
            alt=""
          /> */}
          <h3>NOFLIX</h3>
          {/* <span><a href="/home">Homepage</a></span>
          <span><a href="/history">My History</a></span> */}
        </div>
        <div className="right">
          <form>
            <input type="text" id="search" ref={inputref}/><button onClick={clickhandler}>Search</button>
          </form>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
