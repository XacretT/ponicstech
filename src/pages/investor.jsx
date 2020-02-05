import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";


import CompanySlider2 from '../components/CompanySlider2'

import Header from '../components/Header'

import BS from './investor/bs.svg'

class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet>
            <meta name="description" content="Ponics Technologies Inc. Investor Centre" />
            <title>Investor Centre - Ponics Technologies</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js" />
          </Helmet>
          <SEO />
          <Header />
          <a name="home" />
          <CompanySlider2 />
          {/* About */}
          <section className="g-bg-white">
            <div className="container g-pt-100">
              <div className="row justify-content-center">

                <div className="col-lg-12 order-lg-2 g-pl-30">
                  {/* Heading */}
                  <a name="innovation" />
                  <div className="text-center">
                    <span className="d-block g-color-primary g-font-size-17 text-uppercase mb-5">Ponics Technologies</span>
                    <h2 className="h1 g-color-black g-font-weight-600 mb-5">Innovation, Integration, Quality</h2>
                  </div>
                  {/* End Heading */}

                  <div className="u-heading-v6-1 g-mb-20">
                    <h2 className="h3 u-heading-v6__title g-brd-primary">Innovative and solutions-based </h2>
                  </div>

                  <p className="lead mb-5">
          As one of the leading innovators in the industry, Ponics Technologies is continuously developing trend-setting products. Throught the combination of unique scientific background, practical experience and great production 
          capabilites Ponics Technologies is able to offer products that solve the most complex problems of agronomy and guarantee unrivaled product quality.
                  </p>

                  <div className="u-heading-v6-1 g-mb-20">
                    <h2 className="h3 u-heading-v6__title g-brd-primary">Global presence</h2>
                  </div>

                  <p className="lead mb-5">
          We at the Ponics Technologies are ready to deliver our products and services all over the world and provide timely quality support.
                  </p>
        
                  <div className="u-heading-v6-1 g-mb-20">
                    <h2 className="h3 u-heading-v6__title g-brd-primary">Consistently committed to meeting customer requirements</h2>
                  </div>

                  <p className="lead mb-5">
          Ponics Technologies works tirelessly on the operating efficiency and excellence so as to better meet your demands and strengthen your growing capabilities.
                  </p>

                  {/* Heading */}
                  <div className="text-center">
                    <h2 className="h1 g-color-black g-font-weight-600 mb-5">Advantages</h2>
                  </div>
                  {/* End Heading */}
                  
                  <div>
                    {/* Icon Blocks */}
                    <div className="row">
                      <div className="col-lg-4 u-icon-block--hover g-mb-40">
                        {/* Icon Blocks */}
                        <div className="media g-mb-15">
                          <div className="d-flex align-self-center mr-3">
                            <span className="u-icon-v3 g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                              <i className="icon-education-037 u-line-icon-pro" />
                            </span>
                          </div>
                          <div className="media-body align-self-center">
                            <h3 className="h5 g-color-black mb-0">Innovative</h3>
                          </div>
                        </div>
                        <p className="g-color-gray-dark-v4">First industrial-grade aeroponics equipment on the market</p>
                        {/* End Icon Blocks */}
                      </div>
                      <div className="col-lg-4 u-icon-block--hover g-mb-40">
                        {/* Icon Blocks */}
                        <div className="media g-mb-15">
                          <div className="d-flex align-self-center mr-3">
                            <span className="u-icon-v3 g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                              <i className="icon-finance-145 u-line-icon-pro" />
                            </span>
                          </div>
                          <div className="media-body align-self-center">
                            <h3 className="h5 g-color-black mb-0">Quality</h3>
                          </div>
                        </div>
                        <p className="g-color-gray-dark-v4">Engineered and produced with high precise</p>
                        {/* End Icon Blocks */}
                      </div>
                      <div className="col-lg-4 u-icon-block--hover g-mb-40">
                        {/* Icon Blocks */}
                        <div className="media g-mb-15">
                          <div className="d-flex align-self-center mr-3">
                            <span className="u-icon-v3 g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                              <i className="icon-education-141 u-line-icon-pro" />
                            </span>
                          </div>
                          <div className="media-body align-self-center">
                            <h3 className="h5 g-color-black mb-0">Sustainable</h3>
                          </div>
                        </div>
                        <p className="g-color-gray-dark-v4">All our products are made of recyclable materials</p>
                        {/* End Icon Blocks */}
                      </div>
                    </div>
                    {/* End Icon Blocks */}
                    {/* Icon Blocks */}
                    <div className="row">
                      <div className="col-lg-4 u-icon-block--hover g-mb-40">
                        {/* Icon Blocks */}
                        <div className="media g-mb-15">
                          <div className="d-flex align-self-center mr-3">
                            <span className="u-icon-v3 g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                              <i className="icon-communication-141 u-line-icon-pro" />
                            </span>
                          </div>
                          <div className="media-body align-self-center">
                            <h3 className="h5 g-color-black mb-0">Automatics SAAS</h3>
                          </div>
                        </div>
                        <p className="g-color-gray-dark-v4">Custom Engineered and built automatics paired with fail-proof cloudbased SAAS SCADA service for full control and monitoring</p>
                        {/* End Icon Blocks */}
                      </div>
                      <div className="col-lg-4 u-icon-block--hover g-mb-40">
                        {/* Icon Blocks */}
                        <div className="media g-mb-15">
                          <div className="d-flex align-self-center mr-3">
                            <span className="u-icon-v3 g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                              <i className="icon-science-039 u-line-icon-pro" />
                            </span>
                          </div>
                          <div className="media-body align-self-center">
                            <h3 className="h5 g-color-black mb-0">Services</h3>
                          </div>
                        </div>
                        <p className="g-color-gray-dark-v4">Agronomical, technological and ERP support awailable 24/7. Twitter, Discord, Slack and PonicsDash Embedded text/video chat are always online</p>
                        {/* End Icon Blocks */}
                      </div>
                      <div className="col-lg-4 u-icon-block--hover g-mb-40">
                        {/* Icon Blocks */}
                        <div className="media g-mb-15">
                          <div className="d-flex align-self-center mr-3">
                            <span className="u-icon-v3 g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                              <i className="icon-finance-238 u-line-icon-pro" />
                            </span>
                          </div>
                          <div className="media-body align-self-center">
                            <h3 className="h5 g-color-black mb-0">Modern design</h3>
                          </div>
                        </div>
                        <p className="g-color-gray-dark-v4">Growing experience was never so convenient and easy</p>
                        {/* End Icon Blocks */}
                      </div>
                    </div>
                    {/* End Icon Blocks */}
                  </div>
  
                  <div className="text-center u-heading-v8-1 g-mb-20">
                    <h2 className="h1 text-uppercase u-heading-v8__title g-font-weight-700 mb-0">
Business
                      <strong className="g-bg-gray-dark-v2 g-color-primary">Structure</strong>
                      <img src={BS} className="g-pt-50"alt="Ponics Technologies Inc. Business Strategy" width="100%" />
                    </h2>
                  </div>

                </div>
              </div>
    
            </div>
          </section>

          {/* End About */}
        </div>
        
      </Layout>
    );
  }
}

export default Index;

