import React from 'react'
import Link from 'gatsby-link'
import tray from './tray.png'

const CompanySlider = () => (

  <section className="g-bg-gray-light-v5 g-pb-100">
    <div className="container">
    <div className="row justify-content-between g-pt-140">
      <div className="col-md-6 align-self-center g-mb-40 g-mb-0--md">
        <h2 className="g-color-gray-dark-v3 g-font-weight-600 g-font-size-30 text-uppercase g-line-height-1_2 g-letter-spacing-1_5 g-mb-40">We are Ponics Technologies<br /><span className="g-color-primary">Supplying growing systems</span>
        </h2>

        <div className="media g-mb-20">
          <div className="d-flex align-self-center mr-4">
            <i className="g-color-primary g-font-size-40 icon-science-020" />
          </div>
          <div className="media-body">
            <p className="mb-0">We embody the newest growing techniques and ideas into reality. Sustainable development is our main goal</p>
          </div>
        </div>

        <div className="media g-mb-20">
          <div className="d-flex align-self-center mr-4">
            <i className="g-color-primary g-font-size-40 icon-science-108" />
          </div>
          <div className="media-body">
            <p className="mb-0">Our development department is hardly working to invent and introduce techniques and equipment for growing organic, healthy and tasty greens and vegies</p>
          </div>
        </div>

        <div className="media g-mb-30">
          <div className="d-flex align-self-center mr-4">
            <i className="g-color-primary g-font-size-40 icon-science-142" />
          </div>
          <div className="media-body">
            <p className="mb-0">Boost your growing experience with us! Produce greens and vegies with unprecedented ratio of time and money and best quality on the market</p>
          </div>
        </div>

        <p className="text-uppercase g-font-size-20 mb-0">
        <Link to="/contactus/" className="btn btn-lg u-btn-primary u-btn-hover-v1-4 g-mr-10 g-mb-15">Contact us</Link>
        </p>
      </div>
      <div className="col-md-6 align-self-end g-overflow-hidden">
        <img className="img-fluid" src={tray} alt="Growing tray, H-Type" />
      </div>
    </div>
  </div>
  
</section>



)

export default CompanySlider
