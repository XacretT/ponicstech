

import React from 'react'
import Link from 'gatsby-link'
import hmini from './1.png'


const ProductsHMini = () => (
<section className="g-flex-centered g-height-550 g-py-100 g-pt-100">
  <div className="container">
  <div className="row">
  <div className="col-lg-6 g-mb-50 g-mb-0--lg">
    <img className="img-fluid" src={hmini} alt="H-Type Multi-tiered Growing System by Ponics Technologies" />
  </div>
  <div className="col-lg-6 align-self-center">
    <header className="u-heading-v2-3--bottom g-brd-primary g-mb-20">
      <h2 className="h3 u-heading-v2__title text-uppercase g-font-weight-300">H-Type Multi-Tiered Systems</h2>
    </header>
    <p className="lead g-mb-30">The most efficient and productive way to grow. No limits, no exaggerations!</p>
    <ul className="list-unstyled g-color-gray-dark-v4 g-mb-40">
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Highest plant density in the industry. "Carpet" or spot plants landing.
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Meager water and nutrients consumption
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Vertically and horizontally scalable
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Flexible for any client and situation
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        24/7 support, easy to maintain
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Suitable for any grow specie, but mainly determinate plants
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Perfect for clones acclimatization
      </li>
    </ul>
    <Link to="/products/htype/" className="btn btn-md u-btn-primary rounded-0" href="#!">Learn More</Link>
  </div>
</div>

  </div>
</section>

)

export default ProductsHMini
