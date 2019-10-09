import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../../components/SEO/SEO";
import config from "../../../data/SiteConfig";

import Header from '../../components/Header'
import parallax from './htype/htype-parallax.jpg'
import assembly1 from './ltype/assembly1.png'
import trayassembly from './ltype/tray-assembly.png'

import img1 from './htype/img1.jpg'
import img2 from './htype/img2.jpg'
import img3 from './htype/img3.jpg'
import img4 from './htype/img4.jpg'
import img5 from './htype/img5.jpg'
import img6 from './htype/img6.jpg'
import img7 from './htype/img7.jpg'
import img8 from './htype/img8.jpg'


class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title="L-Type Aeroponic Unit - Ponics Technologies" />

          <SEO />
          <Header />
          <section className="g-bg-gray-light-v5">
            <div className="container g-pt-100 g-mt-100 g-py-100">
              <div className="row justify-content-between">
                <div className="col-md-5 align-self-center">
                  <h2 className="g-color-black g-font-size-36 text-uppercase g-line-height-1_2 g-mb-30">
                    Flexibility and productivity
                    <br />
                    <span className="g-font-weight-700">L-Type Aeroponic Unit</span>
                  </h2>
                  <p className="g-color-gray-dark-v5 g-font-size-16 g-mb-35">Optimal conditions for growing indeterminate plants, berries and cannabis</p>
                </div>
                <div className="col-md-6 align-self-end g-overflow-hidden">
                  <img className="img-fluid fadeInUp u-in-viewport" src={assembly1} alt="H-Type installation" data-animation="fadeInUp" data-animation-delay={1200} data-animation-duration={1500} style={{animationDuration: '1500ms'}} />
                </div>
              </div>
            </div>
          </section>


          <section>
            {/* Nav tabs */}
            <ul className="nav nav-fill text-center justify-content-center u-nav-v8-1" role="tablist" data-target="nav-8-1-accordion-primary-hor-center" data-tabs-mobile-type="accordion" data-btn-classes="btn btn-md btn-block u-btn-outline-primary g-mb-20">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#nav-8-1-accordion-primary-hor-center--1" role="tab">
                  <span className="u-nav-v8__icon u-icon-v3 u-icon-size--lg g-rounded-50x g-brd-around g-brd-4 g-brd-white">
                    <i className="fa fa-file-text" />
                  </span>
                  <strong className="text-uppercase u-nav-v8__title">Description</strong>
                  <em className="u-nav-v8__description">About installations</em>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#nav-8-1-accordion-primary-hor-center--2" role="tab">
                  <span className="u-nav-v8__icon u-icon-v3 u-icon-size--lg g-rounded-50x g-brd-around g-brd-4 g-brd-white">
                    <i className="fa fa-cogs" />
                  </span>
                  <strong className="text-uppercase u-nav-v8__title">Technical Specs</strong>
                  <em className="u-nav-v8__description">Size, weight, color</em>
                </a>
              </li>
              {/* <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#nav-8-1-accordion-primary-hor-center--3" role="tab">
        <span className="u-nav-v8__icon u-icon-v3 u-icon-size--lg g-rounded-50x g-brd-around g-brd-4 g-brd-white">
          <i className="fa fa-image" />
        </span>
        <strong className="text-uppercase u-nav-v8__title">Gallery</strong>
        <em className="u-nav-v8__description">Photos and renders</em>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-toggle="tab" href="#nav-8-1-accordion-primary-hor-center--4" role="tab">
        <span className="u-nav-v8__icon u-icon-v3 u-icon-size--lg g-rounded-50x g-brd-around g-brd-4 g-brd-white">
          <i className="fa fa-balance-scale" />
        </span>
        <strong className="text-uppercase u-nav-v8__title">Case Study</strong>
        <em className="u-nav-v8__description">What can be grown</em>
      </a>
</li> */}
            </ul>
            {/* End Nav tabs */}
            {/* Tab panes */}
            <div id="nav-8-1-accordion-primary-hor-center" className="tab-content g-pt-20--md">
              <div className="tab-pane fade show active" id="nav-8-1-accordion-primary-hor-center--1" role="tabpanel">
      
      

                {/* BEGIN CONTENT */}

                <section className="container">
                  <div className="text-center g-pb-50 g-pt-50">
                    <h2 className="h1 g-color-black g-font-weight-700 mb-4">Aeroponic growing at it's best</h2>
                    <p className="lead mb-0">
L-type Aeroponic Unit is a unique development of Ponics Technologies. These systems are designed and optimized to create optimal conditions for growing plants. Pre-designed flexibility allows you to grow greens, variety of indeterminate plants and berries.
                      <br />
                      <br />
The main feature of this type of installation is the ability to work both in Aeroponic mode and in the DWC mode (Depp Water Culture), which significantly expands the range of their application for growing, in fact, any crops, and also facilitates maintenance of equipment and reduces the risks of failure
                      <br />
                      <br />
Installations of this type can be made to order with any dimensional characteristics and number of tiers

                    </p>
                  </div>
  

                  <section className="container g-pt-100 g-pb-40">
                    {/* Heading */}
                    <div className="text-center g-mb-60">
                      <h2 className="h3 text-uppercase g-font-weight-300 u-heading-v2__title">Aeroponic or hydroponic mode</h2>
                      <div className="d-inline-block g-width-35 g-height-1 g-bg-gray-dark-v5 mb-2" />
                      <p className="mb-2">Choose your own growing methods</p>
                    </div>
                    {/* End Heading */}
                    <div className="row justify-content-between">
                      <div className="col-md-6 align-self-center g-mb-60">
                        <img className="img-fluid" src={trayassembly} alt="Growing tray" />
                      </div>
                      <div className="col-md-5 align-self-center g-mb-30">
                        {/* Icon Blocks */}
                        <div className="g-mb-30">
                          <div className="media mb-2">
                            <div className="d-flex align-self-center mr-3">
                              <span className="u-icon-v1 g-color-primary g-font-size-26">
                                <i className="icon-science-029 u-line-icon-pro" />
                              </span>
                            </div>
                            <div className="media-body align-self-center">
                              <h3 className="h5 mb-0">Variety of covers</h3>
                            </div>
                          </div>
                          <p className="g-color-gray-dark-v4">Covers with different opening's diameter and frequency can be installed on the pallet and, accordingly, the number of planted plants. Up to 18 tomatoes/cucumber plant or up to 100 strawberrie bushes.</p>
                        </div>
                        {/* End Icon Blocks */}
                        {/* Icon Blocks */}
                        <div className="g-mb-30">
                          <div className="media mb-2">
                            <div className="d-flex align-self-center mr-3">
                              <span className="u-icon-v1 g-color-primary g-font-size-26">
                                <i className="icon-science-106 u-line-icon-pro" />
                              </span>
                            </div>
                            <div className="media-body align-self-center">
                              <h3 className="h5 mb-0">Aeroponic or DWC mode</h3>
                            </div>
                          </div>
                          <p className="g-color-gray-dark-v4">Due to the integrated overflow control system, the installation can be operated in the DWC mode, for example, to shed the root system with water or sanitize. Easily maintained filter installed on the drain, prevents contamination of the system by plant and fertilizer residues.</p>
                        </div>
                        {/* End Icon Blocks */}
                        {/* Icon Blocks */}
                        <div className="g-mb-40">
                          <div className="media mb-2">
                            <div className="d-flex align-self-center mr-3">
                              <span className="u-icon-v1 g-color-primary g-font-size-26">
                                <i className="icon-science-107 u-line-icon-pro" />
                              </span>
                            </div>
                            <div className="media-body align-self-center">
                              <h3 className="h5 mb-0">Superb fertillization and oxygen access</h3>
                            </div>
                          </div>
                          <p className="g-color-gray-dark-v4">The feeding system of the nutrient solution in the root space guarantees the ideal droplet size thereby ensuring optimum fertilization of fertilizers by plants without restricting the access of oxygen to the roots</p>
                        </div>
                        {/* End Icon Blocks */}
                      </div>
                    </div>
                  </section>

                  <section className="g-flex-centered g-height-450 g-py-30 g-mt-100">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="u-heading-v2-3--bottom g-brd-primary g-mb-30 ">
                            <h2 className="h3 text-uppercase g-font-weight-300 u-heading-v2__title">Unlimited Growing Possibilities</h2>
                          </div>
                          <p className="lead">Ponics Tech is ready to develop the installation according to the parameters and requests of the customer. The number of tiers can vary from 1 to 5 (an installation height of 2 m, maximum height is up to 6 m).</p>
                          <p>The frame is made of high-strength steel and painted in anti-vandal paint, the trays can be made of stainless food steel or polyvinyl chloride.</p>
                        </div>
                        <div className="col-md-6">

                          <div className="sketchfab-embed-wrapper">
                            <iframe width={600} height={380} src="https://sketchfab.com/models/963b52ff545c40acb3bb157224acb8fb/embed" frameBorder={0} allowvr allowFullScreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel />
                            {' '}
                          </div>

                        </div>
                      </div>

                    </div>
                  </section>


                  <section className="container g-pt-100 g-pb-40 g-mt-100">
                    <div className="">
                      <div className="row justify-content-center g-mb-60">
                        <div className="col-lg-7">
                          {/* Heading */}
                          <div className="text-center">
                            <h2 className="h3 text-uppercase g-font-weight-300 u-heading-v2__title">Sustainable, economical, organic</h2>
                            <div className="d-inline-block " />
                            <p className="lead mb-0">Highest quality products with unsurpassed economical and social effect</p>
                          </div>
                          {/* End Heading */}
                        </div>
                      </div>
                      {/* Icon Blocks */}
                      <div className="row">
                        <div className="col-lg-6 g-mb-30">
                          {/* Icon Blocks */}
                          <div className="u-shadow-v19 g-bg-white rounded g-pa-30">
                            <div className="media g-mb-15">
                              <div className="d-flex mr-4">
                                <span className="g-color-gray-dark-v4 g-font-size-26">
                                  <i className="icon-science-118 u-line-icon-pro" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h3 className="h5 g-color-black mb-20">Fully organic</h3>
                                <div className="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15" />
                                <p className="g-color-gray-dark-v4 g-mb-0">Installation makes it possible to grow purely organic crops with scanty content of nitrates</p>
                              </div>
                            </div>
                          </div>
                          {/* End Icon Blocks */}
                        </div>
                        <div className="col-lg-6 g-mb-30">
                          {/* Icon Blocks */}
                          <div className="u-shadow-v19 g-bg-white rounded g-pa-30">
                            <div className="media g-mb-15">
                              <div className="d-flex mr-4">
                                <span className="g-color-gray-dark-v4 g-font-size-26">
                                  <i className="icon-science-108 u-line-icon-pro" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h3 className="h5 g-color-black mb-20">High density</h3>
                                <div className="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15" />
                                <p className="g-color-gray-dark-v4 g-mb-0">Obtain highest plant density on the market not loosing in quality or price</p>
                              </div>
                            </div>
                          </div>
                          {/* End Icon Blocks */}
                        </div>
                      </div>
                      {/* End Icon Blocks */}
                      {/* Icon Blocks */}
                      <div className="row">
                        <div className="col-lg-6 g-mb-30">
                          {/* Icon Blocks */}
                          <div className="u-shadow-v19 g-bg-white rounded g-pa-30">
                            <div className="media g-mb-15">
                              <div className="d-flex mr-4">
                                <span className="g-color-gray-dark-v4 g-font-size-26">
                                  <i className="icon-science-107 u-line-icon-pro" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h3 className="h5 g-color-black mb-20">Measerable water consumption</h3>
                                <div className="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15" />
                                <p className="g-color-gray-dark-v4 g-mb-0">By recirculating water H-type installation uses up to 95% less clean water then regular soil growing methods</p>
                              </div>
                            </div>
                          </div>
                          {/* End Icon Blocks */}
                        </div>
                        <div className="col-lg-6 g-mb-30">
                          {/* Icon Blocks */}
                          <div className="u-shadow-v19 g-bg-white rounded g-pa-30">
                            <div className="media g-mb-15">
                              <div className="d-flex mr-4">
                                <span className="g-color-gray-dark-v4 g-font-size-26">
                                  <i className="icon-science-002 u-line-icon-pro" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h3 className="h5 g-color-black mb-20">Less nutrients</h3>
                                <div className="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15" />
                                <p className="g-color-gray-dark-v4 g-mb-0">Smart nutrient control system in-line regulates it's composition to achieve an ideal result</p>
                              </div>
                            </div>
                          </div>
                          {/* End Icon Blocks */}
                        </div>
                      </div>
                      {/* End Icon Blocks */}
                      {/* Icon Blocks */}
                      <div className="row">
                        <div className="col-lg-6 g-mb-30">
                          {/* Icon Blocks */}
                          <div className="u-shadow-v19 g-bg-white rounded g-pa-30">
                            <div className="media g-mb-15">
                              <div className="d-flex mr-4">
                                <span className="g-color-gray-dark-v4 g-font-size-26">
                                  <i className="icon-science-014 u-line-icon-pro" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h3 className="h5 g-color-black mb-20">Light spectrum</h3>
                                <div className="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15" />
                                <p className="g-color-gray-dark-v4 g-mb-0">Installation can be adopted to use natural light or equipped with special growing light system</p>
                              </div>
                            </div>
                          </div>
                          {/* End Icon Blocks */}
                        </div>
                        <div className="col-lg-6 g-mb-30">
                          {/* Icon Blocks */}
                          <div className="u-shadow-v19 g-bg-white rounded g-pa-30">
                            <div className="media g-mb-15">
                              <div className="d-flex mr-4">
                                <span className="g-color-gray-dark-v4 g-font-size-26">
                                  <i className="icon-communication-089 u-line-icon-pro" />
                                </span>
                              </div>
                              <div className="media-body">
                                <h3 className="h5 g-color-black mb-20">Support</h3>
                                <div className="g-width-30 g-brd-bottom g-brd-gray-dark-v5 g-my-15" />
                                <p className="g-color-gray-dark-v4 g-mb-0">24/7 support and constat availability of spare parts</p>
                              </div>
                            </div>
                          </div>
                          {/* End Icon Blocks */}
                        </div>
                      </div>
                      {/* End Icon Blocks */}
                    </div>
                  </section>




                  {/* Images 
  <div className="row g-mb-100">
    <div className="col-md-6">
      <img className="img-fluid" src="../../assets/img-temp/1200x900/img1.jpg" alt="Image Designers" />
    </div>
    <div className="col-md-6">
      <img className="img-fluid" src="../../assets/img-temp/1200x900/img2.jpg" alt="Image Designers" />
    </div>
  </div>
   End Images */}


                </section>

                {/* END CONTENT */}




              </div>
    
              {/* SPECSSPECSSPECSSPECS */}
              <div className="tab-pane fade" id="nav-8-1-accordion-primary-hor-center--2" role="tabpanel">
                <div className="container">
                  <div className="table-responsive">
                    <table className="table table-bordered u-table--v2">
                      <thead className="text-uppercase g-letter-spacing-1">
                        <tr>
                          <th className="g-font-weight-300 g-color-black g-min-width-200">Parameter</th>
                          <th className="g-font-weight-300 g-color-black g-min-width-200">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="align-middle text-nowrap">
                            <h4 className="h6 g-mb-2">Width</h4>
                          </td>
                          <td className="align-middle">3000 mm (118,10 inch) or 6000mm (236,20 inch)</td>
                        </tr>
                        <tr>
                          <td className="align-middle text-nowrap">
                            <h4 className="h6 g-mb-2">Depth</h4>
                          </td>
                          <td className="align-middle">340 mm (13,40 inch)</td>
                        </tr>
                        <tr>
                          <td className="align-middle text-nowrap">
                            <h4 className="h6 g-mb-2">Height</h4>
                          </td>
                          <td className="align-middle">230 mm (9,00 inch)</td>
                        </tr>
                        <tr>
                          <td className="align-middle text-nowrap">
                            <h4 className="h6 g-mb-2">Plants in a row</h4>
                          </td>
                          <td>18-36 tomatoes or up to 200 strawberries</td>
                        </tr>
                        <tr>
                          <td className="align-middle text-nowrap">
                            <h4 className="h6 g-mb-2">Frame material</h4>
                          </td>
                          <td className="align-middle">Steel, painted</td>
                        </tr>
                        <tr>
                          <td className="align-middle text-nowrap">
                            <h4 className="h6 g-mb-2">Tray and hood material</h4>
                          </td>
                          <td className="align-middle">Stainless food-grade steel or PVC</td>
                        </tr>
                        <tr>
                          <td className="align-middle text-nowrap">
                            <h4 className="h6 g-mb-2">Plant feeding system</h4>
                          </td>
                          <td className="align-middle">Water-nutrient mixture spray or DWC</td>
                        </tr>
                        <tr>
                          <td className="align-middle text-nowrap">
                            <h4 className="h6 g-mb-2">Working mixture recirculation and adoption</h4>
                          </td>
                          <td className="align-middle">True</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* End Basic Table */}


              </div>

              {/* Gallery */}
              <div className="tab-pane fade" id="nav-8-1-accordion-primary-hor-center--3" role="tabpanel">
                <section className="g-flex-centered g-py-30">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 g-mb-30">
                        <a className="js-fancybox" href="javascript:;" data-fancybox="lightbox-gallery--col2" data-src={img1} data-caption="H-Type">
                          <img className="img-fluid" src={img1} alt="Image Description" />
                        </a>
                      </div>
                      <div className="col-md-6 g-mb-30">
                        <a className="js-fancybox" href="javascript:;" data-fancybox="lightbox-gallery--col2" data-src={img2} data-caption="H-Type">
                          <img className="img-fluid" src={img2} alt="Image Description" />
                        </a>
                      </div>
                      <div className="col-md-6 g-mb-30">
                        <a className="js-fancybox" href="javascript:;" data-fancybox="lightbox-gallery--col2" data-src={img3} data-caption="H-Type">
                          <img className="img-fluid" src={img3} alt="Image Description" />
                        </a>
                      </div>
                      <div className="col-md-6 g-mb-30">
                        <a className="js-fancybox" href="javascript:;" data-fancybox="lightbox-gallery--col2" data-src={img4} data-caption="H-Type">
                          <img className="img-fluid" src={img4} alt="Image Description" />
                        </a>
                      </div>
                      <div className="col-md-6 g-mb-30">
                        <a className="js-fancybox" href="javascript:;" data-fancybox="lightbox-gallery--col2" data-src={img5} data-caption="H-Type">
                          <img className="img-fluid" src={img5} alt="Image Description" />
                        </a>
                      </div>
                      <div className="col-md-6 g-mb-30">
                        <a className="js-fancybox" href="javascript:;" data-fancybox="lightbox-gallery--col2" data-src={img8} data-caption="H-Type">
                          <img className="img-fluid" src={img8} alt="Image Description" />
                        </a>
                      </div>
                    </div>

                  </div>
                </section>
              </div>
    
    
    
              <div className="tab-pane fade" id="nav-8-1-accordion-primary-hor-center--4" role="tabpanel">
                <p>Coming Soon</p>
              </div>
            </div>
            {/* End Tab panes */}
          </section>

        </div>
        
      </Layout>
    );
  }
}

export default Index;

