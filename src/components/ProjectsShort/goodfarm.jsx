import React from 'react'
import Link from 'gatsby-link'
import backgroundimg from './img14.jpg'


const ProductsSlider = () => (
  <section className="container-fluid g-px-0">
    <div className="row align-items-center no-gutters">
      <div className="col-md-6">
        <div className="text-center g-pa-15x">
          <div className="mb-5">
            <h2 className="h1 g-color-black mb-4">GoodFarm</h2>
            <span className="d-block g-font-weight-600 g-font-size-20 mb-2">2014 - 2016<br /> 1.5 tons of basil per month on 500sqm</span>
            <p className="g-color-gray-dark-v4 g-font-size-16">Large-scale industrial aeroponics cultivation facility in Moscow Region aimed at growing eatable greens, tomatoes and cucumbers.</p>
          </div>
          <Link className="btn u-btn-outline-primary g-font-weight-600 g-rounded-50 g-px-30 g-py-13" to="../projects/goodfarm">
See more
            <i className="ml-2 fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
      <div className="col-md-6">
        <div className="g-flex-centered g-min-height-600 g-bg-gray-light-v5 text-center">
          <div className="u-shadow-v19 g-bg-white g-pa-25">
            <img className="img-fluid u-shadow-v21" width="400" src={backgroundimg} alt="GooFarm by Ponics Technologies" />
          </div>
        </div>
      </div>
    </div>
  </section>

)

export default ProductsSlider
