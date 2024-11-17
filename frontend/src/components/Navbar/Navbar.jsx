import React, { useState } from 'react';
import "./Navbar.css";
import { assets } from '../../assets/frontend_assets/assets';


const Navbar = () => {

  const [menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="feastio-logo" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>mobile app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="basket-icon" />
            <div className="dot"></div>
        </div>
        {/* signup button */}
        <div class="container">
          <div class="wrapper">
              <button class="btn">
                  <div class="btn__bg">
                      <span class="btn__bg__layer btn__bg__layer-first"></span>
                      <span class="btn__bg__layer btn__bg__layer-second"></span>
                      <span class="btn__bg__layer btn__bg__layer-third"></span>
                  </div>
                  <span class="btn__text-out">sign in</span>
                  <span class="btn__text-in">sign in</span>
              </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

