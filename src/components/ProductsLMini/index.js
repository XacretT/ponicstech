

import React from 'react'
import Link from 'gatsby-link'
import hmini from './1.png'


const ProductsHMini = () => (
<section className="g-flex-centered g-height-550 g-py-100">
  <div className="container">
  <div className="row">
  <div className="col-lg-6 g-mb-50 g-mb-0--lg">
    <img className="img-fluid" src={hmini} alt="L-Type Growing Unit for large and indeterminate plants by Ponics Technologies" />
  </div>
  <div className="col-lg-6 align-self-center">
    <header className="u-heading-v2-3--bottom g-brd-primary g-mb-20">
      <h2 className="h3 u-heading-v2__title text-uppercase g-font-weight-300">L-Type Aeroponic Unit</h2>
    </header>
    <p className="lead g-mb-30">Aeroponic growing at it's perfection. Suitable for large or ideterminate plants, such as cucumbers, tomatoes or cannabis</p>
    <ul className="list-unstyled g-color-gray-dark-v4 g-mb-40">
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Aeroponic, DWC or NFT mode, easy switching within a moment!
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Easyly scalable for any length or space composition. Multi-tiered assembly using mezzanines
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Meager water and nutrients consumption alongside with unexcelled feeding precision
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Flexible for any client and situation from hobbyist to large farmer
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        24/7 support technical and agronomical support 
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Easy  and cheap to maintain - only 1 technician required to maintain 2000sqm (~21500sqft) growing facility
      </li>
      <li className="d-flex g-mb-10">
        <i className="icon-check g-color-primary g-mt-5 g-mr-10" />
        Suitable for any grow specie, but mainly indeterminate plants
      </li>
    </ul>
    <Link to="/products/ltype/" className="btn btn-md u-btn-primary rounded-0">Learn More</Link>
  </div>
</div>

  </div>
</section>

)

export default ProductsHMini
