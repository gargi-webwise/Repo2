import React, { useState } from "react";
import "../Css/Navbar.css";
const Navbar = () => {
  const [sideNavbar, setSideNavbar]=useState(false)

  const showSidebar = () => {
      setSideNavbar(!sideNavbar)
  }
  const hideSidebar = () => {
  setSideNavbar(!sideNavbar)
  }
  
  return (
    <div>
      <div>
        <div className="nav-bar">
          <nav className="mainNavbar">
            <div className="navbarLogo">
              <img
                className="logo"
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728883740/Vector_qctrm3.png"
                alt="logo"
              />
              <img
                className="logoName"
                src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728888213/Ik_developers_djw7jx.png"
                alt="logo"
              />
            </div>
            <div className="navbarList">
              <ul className="firstNavbar">
                <li className="hideOnMobile">About</li>
                <li className="hideOnMobile">Services</li>
                <li className="hideOnMobile">Case Studies</li> 
                <li className="hideOnMobile">Blog</li>
                <li className="hideOnMobile">How it Works</li> 
                <li className="hideOnMobile">Hire</li>
              </ul>
                <div className="menu" onClick={showSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </div>                  
            </div>
            <div className="navBtn">
              <button className="navbarButton hideOnMobile">Contact Us </button>
            </div>
          </nav>
        </div>
        <div className="sideNav">
          <nav className="sidebar" style={{display: `${sideNavbar ? 'block': 'none'}`}}>
            <div className="sideBarLogo">
            <div className="imageLink" onClick={hideSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#00000"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
            </div>
            <div className="sideNavList">
              <ul className="sideNavbar">
                <li className="">About</li>
                <li className="">Services</li>
                <li className="">Case Studies</li> <li className="">Blog</li>
                <li className="">How it Works</li> <li className="">Hire</li>
              </ul>
            </div>
            <div className="sideNavbarBtn">
            <button className="navbarButton">Contact Us </button>
            </div>
           
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
