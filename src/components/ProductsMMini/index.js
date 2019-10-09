

import React from 'react'
import Link from 'gatsby-link'
import hmini from './1.png'


const ProductsHMini = () => (
<section className="g-flex-centered g-height-550 g-py-100">
  <div className="container">
  <div className="row">
  <div className="col-lg-6 g-mb-50 g-mb-0--lg">
    <img className="img-fluid" src={hmini} alt="Image Description" />
  </div>
  <div className="col-lg-6 align-self-center">
    <header className="u-heading-v2-3--bottom g-brd-primary g-mb-20">
      <h2 className="h3 u-heading-v2__title text-uppercase g-font-weight-300">Mixing Unit</h2>
    </header>
    <p className="lead g-mb-30">Preparation of fertilizer solution</p>
    <ul className="list-unstyled g-color-gray-dark-v4 g-mb-40">
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Especially designed to work with any Ponics Tech growing units composition
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Precise solution control due to high-precision automation
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Offline and online management on Ponics Tech control panel (NODE-RED based)
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Failure and malfunction proof
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Preparation of fresh and adaptation of waste solutions
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Suitable for any grow specie
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Developed individually for each customer
      </li>
    </ul>
    {/*<Link to="/products/ltype/" className="btn btn-md u-btn-primary rounded-0">Learn More</Link>*/}
  </div>
</div>

  </div>
</section>

)

export default ProductsHMini
