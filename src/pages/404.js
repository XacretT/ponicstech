import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
<main className="g-bg-gray-dark-v1 g-color-white g-height-100x g-min-height-100vh g-flex-centered g-pa-15">
  <div className="text-center g-flex-centered-item g-position-rel">
    <div className="g-font-size-180 g-font-size-240--sm g-font-size-420--lg g-line-height-1 g-font-weight-200 g-color-gray-dark-v2">404</div>
    <div className="g-absolute-centered">
      <h1 className="g-font-weight-200 g-mb-20">Page&nbsp;Not&nbsp;Found</h1>
      <p className="g-color-white-opacity-0_6 g-font-size-18">Oops! Looks like you followed a&nbsp;bad&nbsp;link.</p>
      <p className="g-color-white-opacity-0_6 g-font-size-18">If you think this is a problem with us, please&nbsp;<Link to="/contactus" className="g-color-white g-color-primary--hover g-text-no-underline--hover">tell us</Link>.</p>
      <p className="g-color-white-opacity-0_6 g-font-size-18 mb-0">Here is a link to the <Link to="/" className="g-color-white g-color-primary--hover g-text-no-underline--hover">home page</Link>.</p>
    </div>
  </div>
</main>

)

export default NotFoundPage