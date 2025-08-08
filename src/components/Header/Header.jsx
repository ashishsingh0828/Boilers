import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header-area header-area-v1">
      {/* Top Bar */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            {/* Left */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="top-left">
                <ul>
                  <li>
                    <span>
                      <i className="bx bx-industry"></i> We work with global industries!
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Right */}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="top-right">
                <ul className="social-link">
                  <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                  <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                  <li><a href="#"><i className="bx bxl-pinterest-alt"></i></a></li>
                  <li><a href="#"><i className="bx bxl-skype"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="header-navigation">
        <div className="nav-container breakpoint-on">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-lg-3 logo-col col-6">
                <div className="site-branding">
                  <div className="brand-logo">
                    <a href="/"><img src="/public/assets/images/bg/LOGO.svg" alt="Logo" /></a>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="col-lg-9 col-6">
                <div className="nav-menu">
                  {/* Close Icon */}
                  <div className="navbar-close">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>

                  {/* Navigation Menu */}
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item">
                        <a href="#">Home</a>
                        {/* <ul className="sub-menu">
                          <li><a href="index.html">Home 01</a></li>
                          <li><a href="index-2.html">Home 02</a></li>
                          <li><a href="index-3.html">Home 03</a></li>
                          <li className="menu-item-has-children">
                            <a href="#">Onepage</a>
                            <ul className="sub-menu">
                              <li><a href="onepage-home.html">Onepage Home One</a></li>
                              <li><a href="onepage-home-two.html">Onepage Home Two</a></li>
                              <li><a href="onepage-home-three.html">Onepage Home Three</a></li>
                            </ul>
                          </li>
                        </ul> */}
                      </li>

                      <li className="menu-item"><a href="about.html">About</a></li>

                      <li className="menu-item menu-item-has-children">
                        <a href="#">Project</a>
                        <ul className="sub-menu">
                          <li><a href="#">Service</a></li>
                          <li><a href="#">Service Details</a></li>
                        </ul>
                      </li>

                      <li className="menu-item ">
                        <a href="#">Shop</a>
                      </li>
   <li className="menu-item"><a href="contact.html">Post</a></li>
                      <li className="menu-item"><a href="contact.html">Contact</a></li>
                    
                    </ul>
                  </nav>
                </div>

                {/* Toggle Button for Mobile */}
                <div className="navbar-toggler float-right">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
