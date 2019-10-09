import React from 'react'
import { Link } from 'gatsby'
import img6 from './img6-min.jpg'
import img7 from './img7-min.jpg'
import img15 from './img15-min.jpg'


const IconBlocks = () => (

  <section className="text-center">
    <div className="row no-gutters">

      <div className="col-lg-4 u-bg-overlay g-bg-img-hero g-bg-teal-opacity-0_9--after g-color-white text-center g-pa-60" style={{backgroundImage: `url(${img6})`}}>
        <div className="u-bg-overlay__inner">
          <span className="u-icon-v2 u-icon-size--xl u-shadow-v24 rounded-circle g-mb-25">
            <i className="icon-finance-257 u-line-icon-pro" />
          </span>
          <h3 className="h5 text-uppercase g-font-weight-600 g-mb-15">Shortest Growcycle</h3>
          <p className="g-font-size-16 g-mb-20">Up to 65% shorter growcycle compared to soil-methods and up to 35% shorter growcycle compared to hydroponics</p>
          {/* <a className="btn u-shadow-v21 g-bg-white g-color-teal g-color-white--hover g-bg-white-opacity-0_4--hover g-font-size-12 text-uppercase g-font-weight-600 g-rounded-50 g-py-12 g-px-20" href="#!">Learn More</a> */}
        </div>
      </div>

      <div className="col-lg-4 u-bg-overlay g-bg-img-hero g-bg-cyan-opacity-0_9--after g-color-white text-center g-pa-60" style={{backgroundImage: `url(${img15})`}}>
        <div className="u-bg-overlay__inner">
          <span className="u-icon-v2 u-icon-size--xl u-shadow-v24 rounded-circle g-mb-25">
            <i className="fa fa-tint u-line-icon-pro" />
          </span>
          <h3 className="h5 text-uppercase g-font-weight-600 g-mb-15">Meager water, substrate and fertilizer consumption</h3>
          <p className="g-font-size-16 g-mb-20">
Our technology recovers up to 99% of the water used, and the mixing unit performs a live adjustment of the composition of the nutrient mixture.
            {' '}
            <br />
The plant is fixed in a special bushing and does not require the use of a large amount of substrate
          </p>
          {/* <a className="btn u-shadow-v21 g-bg-white g-color-cyan g-color-white--hover g-bg-white-opacity-0_4--hover g-font-size-12 text-uppercase g-font-weight-600 g-rounded-50 g-py-12 g-px-20" href="#!">Check It Now</a> */}
        </div>
      </div>

      <div className="col-lg-4 u-bg-overlay g-bg-img-hero g-bg-purple-opacity-0_9--after g-color-white text-center g-pa-60" style={{backgroundImage: `url(${img7})`}}>
        <div className="u-bg-overlay__inner">
          <span className="u-icon-v2 u-icon-size--xl u-shadow-v24 rounded-circle g-mb-25">
            <i className="icon-food-255 u-line-icon-pro" />
          </span>
          <h3 className="h5 text-uppercase g-font-weight-600 g-mb-15">Highest plant density in industry</h3>
          <p className="g-font-size-16 g-mb-20">
Literally unlimited amount of plants per square meter*
            <br />
*up to 500 plants per square meter for H-type installs
          </p>
          { /*       <a className="btn u-shadow-v21 g-bg-white g-color-purple g-color-white--hover g-bg-white-opacity-0_4--hover g-font-size-12 text-uppercase g-font-weight-600 g-rounded-50 g-py-12 g-px-20" href="#!">Discover More</a>
*/}      
        </div>
      </div>

    </div>
  </section>


)

export default IconBlocks
