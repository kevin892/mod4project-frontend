import React from 'react';
import './SignIn.css'
import './Navbar.css'
import logo from'./images/logo.png';

const SignIn=props=>{

  return(
    <div>
      <nav className="uk-navbar-container" uk-navbar="mode: click" uk-navbar>
          <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                  <li className="uk-parent"><a href="/signin"></a></li>
              </ul>
              <img className='logo'src={logo}></img>
          </div>
      </nav>
      <br/>
      <br/>
        <br/>
        <br/>
        <div className="uk-animation-slide-left-medium">
        <h1 class="uk-heading-small sign-in-heading"><span uk-icon="icon: grid; ratio: 2"></span><strong>Sign In</strong></h1>
        <br/>
        <br/>
    <form className='sign-in-form'>

    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon" uk-icon="icon: user"></span>
            <input class="uk-input" type="text"/>
        </div>
    </div>
<br/>
    <div class="uk-margin">
        <div class="uk-inline">
            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
            <input class="uk-input" type="password"/>
        </div>
    </div>
    <br/>
    <a href="/apis" class="uk-button uk-button-primary">Sign In</a>
</form>
</div>
</div>
  )
}

export default SignIn
