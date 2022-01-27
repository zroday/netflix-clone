import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./navbar.scss"

const Navbar = () =>{

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="Netflix" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
            <Search className="icon"/>
            <span>KID</span>
            <Notifications className="icon"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Profile" />
            <div className="profile">
            <ArrowDropDown className="icon"/>
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Navbar