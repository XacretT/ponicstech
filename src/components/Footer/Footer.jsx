import React, { Component } from "react";
import { Link } from "gatsby";


class Footer extends Component {
  render() {

    return (
      <div>
        <div id="contacts-section" className="g-bg-black-opacity-0_9 g-color-white-opacity-0_8 g-py-60">
          <div className="container">
            <div className="row">
      
              <div className="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
                <div className="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20">
                  <h2 className="u-heading-v2__title h6 text-uppercase mb-0">About Us</h2>
                </div>
                <p>Ponics Technologies is aimed to deliver superb industrial-grade growing equipment and accessories for both business and personal use </p>
              </div>
      
              <div className="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
                {' '}
              </div>
     
      


              <div className="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
                <div className="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20">
                  <h2 className="u-heading-v2__title h6 text-uppercase mb-0">Useful Links</h2>
                </div>
                <nav className="text-uppercase1">
                  <ul className="list-unstyled g-mt-minus-10 mb-0">
                    <li className="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                      <h4 className="h6 g-pr-20 mb-0">
                        <Link to="/products/" className="g-color-white-opacity-0_8 g-color-white--hover">Products</Link>
                        <i className="fa fa-angle-right g-absolute-centered--y g-right-0" />
                      </h4>
                    </li>
                    <li className="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                      <h4 className="h6 g-pr-20 mb-0">
                        <Link to="/company/" className="g-color-white-opacity-0_8 g-color-white--hover">Company</Link>
                        <i className="fa fa-angle-right g-absolute-centered--y g-right-0" />
                      </h4>
                    </li>
                    <li className="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                      <h4 className="h6 g-pr-20 mb-0">
                        <a className="g-color-white-opacity-0_8 g-color-white--hover" href="https://medium.com/@ponicstech">Blog</a>
                        <i className="fa fa-angle-right g-absolute-centered--y g-right-0" />
                      </h4>
                    </li>
                    <li className="g-pos-rel g-py-10">
                      <h4 className="h6 g-pr-20 mb-0">
                        <Link to="/contactus/" className="g-color-white-opacity-0_8 g-color-white--hover">Contact Us</Link>
                        <i className="fa fa-angle-right g-absolute-centered--y g-right-0" />
                      </h4>
                    </li>
            
                  </ul>
                </nav>
              </div>
      



              <div className="col-lg-3 col-md-6">
                <div className="u-heading-v2-3--bottom g-brd-white-opacity-0_8 g-mb-20">
                  <h2 className="u-heading-v2__title h6 text-uppercase mb-0">Our Contacts</h2>
                </div>
                <address className="g-bg-no-repeat g-font-size-12 mb-0">
          
                  <div className="d-flex g-mb-20">
                    <div className="g-mr-10">
                      <span className="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6">
                        <i className="fa fa-map-marker" />
                      </span>
                    </div>
                    <p className="mb-0">
                      Moscow 
                      {' '}
                      <br />
                      {' '}
                      Russian Federation
                    </p>
                  </div>
          

                  <div className="d-flex g-mb-20">
                    <div className="g-mr-10">
                      <span className="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6">
                        <i className="fa fa-phone" />
                      </span>
                    </div>
                    <p className="mb-0 g-mt-10"><a href="tel:+79267920192">+7 (926) 7920192</a></p>
                  </div>
          

                  <div className="d-flex g-mb-20">
                    <div className="g-mr-10">
                      <span className="u-icon-v3 u-icon-size--xs g-bg-white-opacity-0_1 g-color-white-opacity-0_6">
                        <i className="fa fa-at" />
                      </span>
                    </div>
                    <p className="mb-0">
                      <a className="g-color-white-opacity-0_8 g-color-white--hover" href="mailto:hi@ponics.tech">hi@ponics.tech</a>
                      <br />
                      <a className="g-color-white-opacity-0_8 g-color-white--hover" href="http://ponics.tech">www.ponics.tech</a>
                    </p>
                  </div>
          

                </address>
              </div>
      
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
