import React from 'react'
import Link from 'gatsby-link'
import tray from './tray2.png'

const CompanySlider2 = () => (

  <section className="g-bg-gray-light-v5 g-pb-100 g-pt-100">
    <div className="container">
      <div className="row justify-content-between g-pt-140">
        <div className="col-md-7 align-self-center g-mb-40 g-mb-0--md">
          <h2 className="g-color-gray-dark-v3 g-font-weight-600 g-font-size-30 text-uppercase g-line-height-1_2 g-letter-spacing-1_5 g-mb-40">
We are Ponics Technologies
            <br />
            <span className="g-color-primary">Topnotch agritech and expertise</span>
          </h2>

          <div className="media g-mb-20">
            <div className="d-flex align-self-center mr-4">
              <i className="g-color-primary g-font-size-40 icon-science-142" />
            </div>
            <div className="media-body">
              <p className="mb-0">Our mission is to accelerate the world’s transition to sustainable farming. Since our founding in 2005, we have been breaking new barriers in developing aeroponics based high-performance growing techniques that are not only the world’s highest-yield methods — but also the safest, purest and risk-free. 
</p>
            </div>
          </div>

          <div className="media g-mb-20">
            <div className="d-flex align-self-center mr-4">
              <i className="g-color-primary g-font-size-40 icon-science-108" />
            </div>
            <div className="media-body">
              <p className="mb-0">Beyond the flagship Aeroponics technology and equipment based on it, we also offer automatics, SAAS software and other hydroponic equipment thus covering growing all useful plants, including greens, berries, flowers, vegetables and cannabis, which we expect will truly propel sustainable and pure farming into the agritech mainstream.</p>
            </div>
          </div>

          <div className="media g-mb-30">
            <div className="d-flex align-self-center mr-4">
              <i className="g-color-primary g-font-size-40 icon-science-019" />
            </div>
            <div className="media-body">
              <p className="mb-0">In addition, Ponics Technologies now offers a full suite of engineering services alongside with agronomical, technological and ERP support. As the world's only fully integrated agritech company, we are going to take place at the vanguard of the world's inevitable shift towards a sustainable and high-efficient farming.</p>
            </div>
          </div>

          <div className="media g-mb-30">
            <div className="d-flex align-self-center mr-4">
              <i className="g-color-primary g-font-size-40 icon-science-014" />
            </div>
            <div className="media-body">
              <p className="mb-0">Ponics Technologies develops the most advanced plant cultivation methods including engineering, testing and integration. All our developments and inventions are subject to patenting within the framework of international law.</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 align-self-end g-overflow-hidden">
          <img className="img-fluid" src={tray} alt="Plants cloner and seeds incubator" />
        </div>
      </div>
    </div>
  
  </section>



)

export default CompanySlider2
