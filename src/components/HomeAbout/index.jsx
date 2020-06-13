import React from 'react'
import { Link } from 'gatsby'
import htype from './h-type.jpg'
import ltype from './l-type.jpg'
import parallax from './parallax.jpg'
import basilbox from './basilbox.png'
import fog from './fog.png'
import { withPrefix } from 'gatsby-link'

import '../../layout/assets/vendor/hs-bg-video/hs-bg-video.css'

const HomeAbout = () => (

  <div>
    {/* About aeroponics */} 

    <section className="g-flex-centered g-height-500 g-bg-img-hero u-bg-overlay g-bg-white-opacity-0_7--after g-py-20" >
      <div className="container u-bg-overlay__inner">
        <div className="row g-pt-100">
          <div className="col-md-6">
            <div className="u-heading-v2-3--bottom g-brd-primary g-mb-30">
              <h2 className="h3 text-uppercase g-font-weight-300 u-heading-v2__title">What is Aeroponics</h2>
            </div>
            <p className="lead">
              <span className="u-dropcap g-color-primary g-mr-20 g-mb-10">A</span>
eroponics is the process of 
              {' '}
              <strong>growing plants in an air</strong>
              {' '}
or mist environment without the use of soil or an aggregate medium
              {' '}
            </p>
            <p>The basic principle of Ponics Tech aeroponic growing systems is to grow plants suspended in a closed environment by spraying the plant&apos;s dangling roots and lower stem with a sprayed, nutrient-rich water solution. The leaves and crown, often called the canopy, extend above. The roots of the plant are separated by the plant support structure.</p>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" style={{width: 300}} src={fog} alt="Image Description" />
          </div>
        </div>
      </div>
    </section>




    {/* About */}
    <section id="go-to-content" className="g-pt-100 g-pb-100">
      <div className="container">
        {/* Image, Text Block */}
        <div className="row d-flex align-items-lg-center flex-wrap g-mb-60 g-mb-0--lg">
          <div className="col-md-6 col-lg-8">
            <img className="img-fluid rounded" src={htype} alt="H-Type Installation" />
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="g-mt-minus-30 g-mt-0--md">
              <div className="g-mb-20">
                <h2 className="g-color-black g-font-weight-600 g-font-size-25 g-font-size-35--lg g-line-height-1_2 mb-4">
H-Type
                  <br />
Multi-tiered Installation
                </h2>
                <p className="g-font-size-16">Highest plant density on the market. Ideal for growing greens, determinate plants and prouction of seedlings</p>
              </div>


            </div>

            <Link to="/products/htype/" className="btn u-btn-primary g-brd-2 g-brd-white g-font-size-13 g-rounded-50 g-pl-20 g-pr-15 g-py-9" href="#!">
            More about H-Type
              <span className="align-middle u-icon-v3 g-width-16 g-height-16 g-color-black g-bg-white g-font-size-11 rounded-circle ml-3">
                <i className="fa fa-angle-right" />
              </span>
            </Link>
          </div>
        </div>
        {/* End Image, Text Block */}
      </div>
      <div className="container">
        {/* Image, Text Block */}
        <div className="row d-flex justify-content-between align-items-lg-center flex-wrap g-mt-minus-50--lg">
          <div className="col-md-6 order-md-2">
            <div className="g-brd-around--md g-brd-10 g-brd-white rounded">
              <img className="img-fluid w-100 rounded" src={ltype} alt="L-Type Installation" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 ml-auto order-md-1">
            <div className="g-mt-minus-30 g-mt-0--md">
              <div className="g-mb-20">
                <h2 className="g-color-black g-font-weight-600 g-font-size-25 g-font-size-35--lg g-line-height-1_2 mb-4">
                  <br />
L-Type installation
                  <br />
Indeterminate growing
                </h2>
                <p className="g-font-size-16">Designed for growing indeterminate plants, such as tomatoes, cucumbers, strawberries and others.</p>
              </div>
              <Link to="/products/ltype/" className="btn u-btn-primary g-brd-2 g-brd-white g-font-size-13 g-rounded-50 g-pl-20 g-pr-15 g-py-9" href="#!">
            More about L-Type
                <span className="align-middle u-icon-v3 g-width-16 g-height-16 g-color-black g-bg-white g-font-size-11 rounded-circle ml-3">
                  <i className="fa fa-angle-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* End Image, Text Block */}
      </div>
    </section>
    {/* End About */}

    {/* Video 

 
    <section className="js-bg-video g-flex-centered g-height-500 g-color-white u-bg-overlay g-bg-black-opacity-0_6--after g-py-20 g-overflow-y-hidden" style={{backgroundImage: `url(${parallax})`}} data-hs-bgv-type="youtube" data-hs-bgv-id="A4pmZ45BY1I" data-hs-bgv-loop={1}>
      <Link to="/products/"> 
        {' '}
        <div className="container u-bg-overlay__inner">
          <div className="row">
            <div className="col-md-6 align-self-center g-py-20">
              <h2 className="h4 text-uppercase g-letter-spacing-1 g-mb-20">More about</h2>
              <p className="lead mb-0 g-line-height-2">Learn more about our products and how we can help You improve your growing experience and business.</p>
            </div>
            <div className="col-md-6 align-self-center g-py-20">
              <img className="w-200" src={basilbox} alt="Ponics Techechnologies Products and Solutions" />
            </div>
          </div>
        </div>
      </Link>
    </section>
*/}

  </div>


)

export default HomeAbout 