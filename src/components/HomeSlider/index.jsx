import React, { Component }  from 'react'
import { Link } from "gatsby"
import img15 from './img15.png'
import img16 from './img16.png'


class HomeSlider extends Component {
  render() {
    return (
      <section className="g-flex-centered g-bg-pos-center g-bg-img-hero g-pos-rel g-z-index-1 g-overflow-hidden" style={{height: 'calc(110vh - 75px)'}} data-calc-target="#js-header">
        <div className="g-pos-abs g-top-0 g-left-0 fadeInDown u-in-viewport" data-animation="fadeInDown" data-animation-delay={100} data-animation-duration={1500} style={{animationDuration: '1500ms'}}>
        
          <img className="img-fluid" src={img15} alt="Lettuce" />
        </div>
        <div className="g-pos-abs g-bottom-0 g-right-0 fadeInUp u-in-viewport" data-animation="fadeInUp" data-animation-delay={1800} data-animation-duration={1500} style={{animationDuration: '1500ms'}}>
          <img className="img-fluid" src={img16} alt="Basil" />
        </div>
        <div className="container text-center g-z-index-1">
          <div className="mb-4 g-pt-100">
            <h1 className="h2 d-inline-block g-color-primary g-font-weight-700 g-font-size-40 g-font-size-75--md text-uppercase g-line-height-1 fadeInDown u-in-viewport" data-animation="fadeInDown" data-animation-delay={1400} data-animation-duration={1500} style={{animationDuration: '1500ms'}}>Ponics</h1>
            <h2 className="h2 d-inline-block g-color-black g-font-weight-700 g-font-size-40 g-font-size-75--md text-uppercase g-line-height-1 fadeInDown u-in-viewport" data-animation="fadeInDown" data-animation-delay={1200} data-animation-duration={1500} style={{animationDuration: '1500ms'}}>Technologies</h2>
  
          </div>
          <div className="mx-auto g-max-width-600 g-overflow-hidden">
            <p className="g-color-black g-font-size-18 g-font-size-24--md g-mb-40 fadeInDown u-in-viewport" data-animation="fadeInDown" data-animation-delay={1600} data-animation-duration={1500} style={{animationDuration: '1500ms'}}>
        Delivering high-end industrial aeroponic and hydroponic systems to fit all agricultural business purposes and personal plants cultivation needs
            </p>
          </div>
          <div data-animation="fadeInDown" data-animation-delay={2000} data-animation-duration={1500} style={{animationDuration: '1500ms'}} className="fadeInDown u-in-viewport">
            <Link className="btn btn-lg u-btn-outline-black g-font-weight-600 g-font-size-13 text-uppercase g-rounded-50 mx-2 g-px-25 g-py-15" to="/products/">Discover More</Link>
            <Link className="btn btn-lg u-btn-primary g-font-weight-600 g-font-size-13 text-uppercase g-rounded-50 mx-2 g-px-25 g-py-15" to="/products/">Our Products</Link>
     
          </div>
        </div>
      </section>
    )
  }
}

export default HomeSlider;
