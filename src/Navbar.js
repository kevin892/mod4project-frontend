import React from 'react'
import './Navbar.css'
import logo from'./images/logo.png';

const Navbar = (props) =>{
return(
<div>

  <nav className="uk-navbar-container" uk-navbar="mode: click" uk-navbar>
      <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
              <a className="uk-navbar-item uk-logo"><span uk-icon="user"></span></a>
              <a className="uk-navbar-item uk-logo">Hi, Kevin</a>
              <li onClick={()=>props.apiLister("myApis")}className="uk-parent"><a href="">My APIs</a></li>
              <li  onClick={()=>props.apiLister("createApis")} className="uk-parent"><a href="">Create API</a></li>
              <li className="uk-parent"><a href="">Logout</a></li>
              <li><a href=""></a></li>
          </ul>
          <img className='logo'src={logo}></img>
      </div>
  </nav>
  </div>



)
}
export default Navbar
