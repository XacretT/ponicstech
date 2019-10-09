import React from 'react'
import Link from 'gatsby-link'
import Heart from './customassets/heart.jpg'

const SecondPage = () => (
  <div>
    <div className="g-flex-centered g-bg-img-hero g-bg-pos-top-center g-bg-cover g-bg-bluegray-opacity-0_2--after" style={{backgroundImage: `url(${Heart})`, height: 'calc(100vh - 75.3333px)'}} data-calc-target="#js-header">
  <div className="container g-pos-rel g-z-index-1 g-py-100">
    <div className="u-shadow-v36 g-max-width-600 g-bg-primary g-pa-50">
      <div className="g-mb-40">
        <h1 className="g-color-white g-font-size-40--md mb-3">We received your message</h1>
        <p className="g-color-white-opacity-0_8 g-font-size-18--md">Thank you for your interest in our products and developments. We will reply to you as soon as possible</p>
      </div>
      <Link className="btn u-shadow-v32 g-brd-2 g-brd-white-opacity-0_6 g-color-white-opacity-0_8 g-color-primary--hover g-bg-white--hover g-rounded-30 g-px-35 g-py-10" to="/">Continue exploring website</Link>
    </div>
  </div>
</div>


  </div>
)

export default SecondPage
