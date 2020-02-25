import React from 'react'
import mamanatura from './mamanatura.webp'


const Mamanatura = () => (
  <section className="container-fluid g-px-0">
    <div className="row align-items-center no-gutters">
      <div className="col-md-6 order-md-2">
        <div className="text-center g-pa-15x">
          <div className="mb-5">
            <h3 className="h1 g-color-black mb-4">Microgreens farm</h3>
            <span className="d-block g-font-weight-600 g-font-size-20 mb-2">2018 - 2019</span>
            <p className="g-color-gray-dark-v4 g-font-size-16">Medium-scale cityfarm growing peashots and sunflower microgreens</p>
          </div>
          <a className="btn u-btn-outline-primary g-font-weight-600 g-rounded-50 g-px-30 g-py-13" href="#">
See more
            <i className="ml-2 fa fa-long-arrow-right" />
          </a>
        </div>
      </div>
      <div className="col-md-6 order-md-1">
        <div className="g-flex-centered g-min-height-600 g-bg-secondary text-center">
          <div className="u-shadow-v19 g-bg-white g-pa-25">
            <img className="img-fluid u-shadow-v21" width="400px" src={mamanatura} alt="Microgreens by Ponics Technologies" />
          </div>
        </div>
      </div>
    </div>
  </section>


)

export default Mamanatura
