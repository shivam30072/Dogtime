import React from "react";

const Navbar = ({ handleclick, burgur }) => {
  return (
    <>
      <div className="main-header">
        <div className="header-left">
          <div className="burgur-btn" onClick={() =>{handleclick()}}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            </div>
            {burgur &&  <div className="burgur-menu"> 
            <div className="inside-bur-menu">
            <li className="b-itm  hov">Adopt</li>
            <li className="b-itm2 hov">Dog Breeds</li>
            <li className="b-itm3 hov">Dog Blog</li>
            <li className="b-itm2 hov">Dog Names</li>
            <li className="b-itm5 hov">Health</li>
            <li className="b-itm6 hov">Lifestyle</li>
            <li className="b-itm7 hov">Shop</li>
            </div>
            </div> }
          
        </div>
        <div className="header-mid">
          <div className="logo">
            <a href="/">
            <img
              className="logo-img"
              src="https://dogtime.com/assets/uploads/2019/04/dogtime_notagline.svg"
            ></img></a>
          </div>
        </div>
        <div className="header-right">
          <div className="socials">
            <li>
              <a href="https://www.facebook.com/dogtime" />
              <img
                className="sc"
                src="https://dogtime.com/wp-content/themes/dogtime-2019/images/svg/icon-facebook.svg"
              ></img>
            </li>
            <li>
              <a href="https://www.twitter.com/dogtime_com/" />
              <img
                className="sc"
                src="https://dogtime.com/wp-content/themes/dogtime-2019/images/svg/icon-twitter.svg"
              ></img>
            </li>
            <li>
              <a href="https://www.pinterest.com/dogtime/" />
              <img
                className="sc"
                src="https://dogtime.com/wp-content/themes/dogtime-2019/images/svg/icon-pinterest-white.svg" 
              ></img>
            </li>
            <li>
              <a href="https://www.instagram.com/dogtime_com/" />
              <img
                className="sc"
                src="https://dogtime.com/wp-content/themes/dogtime-2019/images/svg/icon-instagram-white.svg"
              ></img>
            </li>
          </div>
        </div>
      </div>

      <div className="main-menu">
         <div className="menu-items">
            <li className="items" >Adopt</li>
            <li className="items">Dog Breeds</li>
            <li className="items">Dog Blog</li>
            <li className="items">Dog Names</li>
            <li className="items">Health</li>
            <li className="items">Lifestyle</li>
            <li className="items">Shop</li>
         </div>
      </div>
     
    </>
  );
};

export default Navbar;
