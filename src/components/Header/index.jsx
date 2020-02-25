import React, { Component } from 'react'
import { Link } from "gatsby"
// import Helmet from "react-helmet";
import logo from "./logo-ponics-technologies.svg";



class Header extends Component {
  
      // constructor to set state and bind "this"
      constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.handleClick = this.handleClick.bind(this);
      }
  
    // function to handle the click
     handleClick() {
      this.setState(prevState => ({
        showModal: !prevState.showModal
      }));
    }

  render() {
    const modal = (
      <ul id="languages-dropdown-2" className="list-unstyled g-pos-abs g-left-0 g-bg-black g-width-160 g-pb-5 g-mt-10 u-dropdown--css-animation" aria-labelledby="languages-dropdown-invoker-2" style={{animationDuration: '100ms', left: 0}}>
        <li>
          <Link className="d-block g-color-white g-color-primary--hover g-text-underline--none--hover g-py-5 g-px-20" to="/">English</Link>
        </li>
        <li>
          <Link className="d-block g-color-white g-color-primary--hover g-text-underline--none--hover g-py-5 g-px-20" to="/ru/">Русский</Link>
        </li>
      </ul>
    );
return (
  <header id="js-header" className="u-header u-header--sticky-top u-header--toggle-section u-header--change-appearance" data-header-fix-moment="300">
    <div className="u-header__section u-header__section--hidden u-header__section--dark g-bg-black g-transition-0_3 g-py-10">
      <div className="container">
        <div className="row flex-column flex-sm-row justify-content-between align-items-center text-uppercase g-font-weight-600 g-color-white g-font-size-12 g-mx-0--lg">
          <div className="col-auto">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/ponicstech/" className="g-color-white g-color-primary--hover g-pa-3">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/ponics.tech" className="g-color-white g-color-primary--hover g-pa-3">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/PonicsTech" className="g-color-white g-color-primary--hover g-pa-3">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/ponicstech/" className="g-color-white g-color-primary--hover g-pa-3">
                  <i className="fa fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://medium.com/@ponicstech" className="g-color-white g-color-primary--hover g-pa-3">
                  <i className="fa fa-medium" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://join.slack.com/t/ponicstech/shared_invite/enQtMzM3NDkzODc1NzAwLWYwZDcwZThiM2QzZDZjMzY1MWE3ZThlZGIxODA4YTQzNzI2NzQxMmI5MDRlOGM1OTQ4ODliNmZhZmVmNTBlNjY" className="g-color-white g-color-primary--hover g-pa-3">
                  <i className="fa fa-slack" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <a href="tel:+17472207619">
              <i className="fa fa-phone g-font-size-18 g-valign-middle g-color-primary g-mr-10 g-mt-minus-2" />
              +1(747)2207619
            </a>
            {' '}
&nbsp;&nbsp; Arthur
          </div>
          {/* <div className="col-auto">
        <i className="fa fa-phone g-font-size-18 g-valign-middle g-color-primary g-mr-10 g-mt-minus-2" />
        8 800 1234 4321
      </div>
      <div className="col-auto">
        <i className="fa fa-clock-o g-font-size-18 g-valign-middle g-color-primary g-mr-10 g-mt-minus-2" />
        Mon-Fri: 9 AM - 5 PM
</div> */}
      
          {/* <div className="col-auto g-pos-rel">
            <ul className="list-inline g-overflow-hidden g-pt-1 g-mx-minus-4 mb-0">
              <li className="list-inline-item g-mx-4">
                <i className="fa fa-language g-font-size-18 g-valign-middle g-color-primary g-pos-rel g-top-minus-2 g-mr-10" />
                 <Link 
                  to="/"
                  id="languages-dropdown-invoker-2"
                  className="g-color-white g-color-primary--hover g-text-underline--none--hover" 
                  onClick={this.handleClick}
                >
                  Language
                </Link> 

                {this.state.showModal ? modal : ''} 
              </li>
            </ul>
          </div> */}


          
        </div>
      </div>
    </div>

      
      
    <div className="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10" data-header-fix-moment-exclude="g-py-10" data-header-fix-moment-classes="u-shadow-v18 g-py-0">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
            
          <button className="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-3 g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
            <span className="hamburger hamburger--slider">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </span>
          </button>
            

            
          <a href="http://ponics.tech" className="navbar-brand">
            <img src={logo} height="40px" alt="Ponics Technologies - Applied Aeroponics and Hydroponics" />
          </a>
            

            
          <div className="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg" id="navBar">
            <ul className="navbar-nav text-uppercase g-font-weight-600 ml-auto">


              <li className="nav-item g-mx-20--lg">
                <Link to="/products/" className="nav-link px-0">Products</Link>
              </li>
              <li className="nav-item g-mx-20--lg">
                <Link to="/projects/" className="nav-link px-0">Case Study</Link>
              </li>
              <li className="nav-item g-mx-20--lg">
                <Link to="/investor/" className="nav-link px-0">Investor Centre</Link>
              </li>

              <li className="nav-item dropdown g-mx-20--lg">
                <a href="#" className="nav-link dropdown-toggle g-px-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</a>
                <ul className="dropdown-menu rounded-0 g-text-transform-none g-brd-none g-brd-top g-brd-primary g-brd-top-2 g-mt-20 g-mt-10--lg--scrolling u-shadow-v11 g-text-transform-none font-weight-normal">
                  <li className="dropdown-item">
                    <Link to="/company/" className="nav-link px-0">About Company</Link>
                  </li>
                  <li className="dropdown-item">
                    <a href="https://medium.com/@ponicstech" className="nav-link px-0">Blog</a>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/contactus/" className="nav-link px-0">Contact Us</Link> 
                  </li>
                </ul>
              </li>
              


            </ul>
          </div>
            
        </div>
      </nav>
    </div>
  </header>
 ) }
};

export default Header;