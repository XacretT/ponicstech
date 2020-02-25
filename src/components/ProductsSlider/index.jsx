import React from 'react'
import backgroundimg from './img14.jpg'


const ProductsSlider = () => (
  <div>

    <section className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall is-touch" data-options="{direction: 'reverse', settings_mode_oneelement_max_offset: '150'}">
      {/* Parallax Image */}
      <div className="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-size-cover g-bg-primary-gradient-opacity-v1--after" style={{height: '130%', backgroundImage: `url(${backgroundimg})`, transform: 'translate3d(0px, -66.876px, 0px)'}} />
      {/* End Parallax Image */}
      <div className="container text-center g-z-index-1 g-pos-rel g-py-200">
        <h1 className="g-color-white g-font-weight-300 g-mb-25">Finding your perfect</h1>
        <h2 className="g-color-white g-font-weight-700 g-font-size-65 text-uppercase">Growing Solution</h2>
      </div>
    </section>


  </div>
)

export default ProductsSlider
