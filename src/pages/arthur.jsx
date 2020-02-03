import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Header from '../components/Header'

import arthur from './teamphoto/arthur.jpg'
import arthurcv from './teamphoto/arthur-cv-qr.png'

class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title="Arthur Azatian - Ponics Technologies" />

          <SEO />
          <Header />
          {/* Content */}
          <section className="g-bg-secondary g-py-100">
            <div className="container g-pt-100">
              <div className="row">
                <div className="col-lg-12">
                  <figure className="u-shadow-v19 g-bg-white g-rounded-4 g-pa-20">
                    <div className="d-flex justify-content-start">
                    
                      {/* Figure Image */}
                      <div className="d-block">
                        {/* Figure Info */}
                        <div className="row">
                          <div className="col-lg-4 g-mb-40 g-mb-0--lg">
                            {/* User Image */}
                            <div className="g-mb-20">
                              <img className="img-fluid w-100" src={arthur} alt="Arthur Azatian" />
                            </div>
                            {/* User Image */}
                            {/* User Contact Buttons */}
                            <a className="btn btn-block u-btn-outline-primary g-rounded-50 g-py-12 g-mb-10" href="mailto:cmo@ponics.tech">
                              <i className="icon-envelop-letter g-pos-rel g-top-1 g-mr-5" />
                              {' '}
Write me a mail
                            </a>
                            <a className="btn btn-block u-btn-darkgray g-rounded-50 g-py-12 g-mb-10" href="tel:+17472207619">
                              <i className="icon-call-in g-pos-rel g-top-1 g-mr-5" />
                              {' '}
Call Me
                            </a>
                            {/* End User Contact Buttons */}
                          </div>
                          <div className="col-lg-8">
                            {/* User Details */}
                            <div className="d-flex align-items-center justify-content-sm-between g-mb-5">
                              <h2 className="g-font-weight-300 g-mr-10">Arthur Azatian</h2>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item g-mx-2">
                                  <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.facebook.com/arthur.azatyan.3">
                                    <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-facebook" />
                                    <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="list-inline-item g-mx-2">
                                  <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.linkedin.com/in/arthur86/">
                                    <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-linkedin" />
                                    <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="list-inline-item g-mx-2">
                                  <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.facebook.com/arthur.azatyan.3">
                                    <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-vk" />
                                    <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-vk" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* End User Details */}
                            {/* User Position */}
                            <h4 className="h6 g-font-weight-300 g-mb-10">
                              <i className="icon-badge g-pos-rel g-top-1 g-mr-5 g-color-gray-dark-v5" />
                              {' '}
Chief Marketing Officer, Engineer at Ponics Technologies Inc.
                            </h4>
                            {/* End User Position */}
                            {/* User Info */}
                            <ul className="list-inline g-font-weight-300">
                              <li className="list-inline-item g-mr-20">
                                <i className="icon-location-pin g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" />
                                {' '}
Los-Angeles, California, USA
                              </li>

                              <li className="list-inline-item g-mr-20">
                                <i className="icon-link g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" />  
                                {' '}
                                <a className="g-color-main g-color-primary--hover" href="http://ponics.tech/arthur">ponics.tech/arthur</a>
                              </li>
                            </ul>
                            {/* End User Info */}
                            <hr className="g-brd-gray-light-v4 g-my-20" />
                            <p className="lead g-line-height-1_8">
Core interests are creating and administrating of businesses, management processes automatization, introducing digital analytical tools, creating unique sales offers and new customer-oriented services. Like to study new businesses and use an engineering approach to improve them.
                              <br />
                              <br />
The second part of my life I dedicate to motor racing and everything around it. Participated in races under local car shop sponsorship. Designed and produced unique car projects.
                              {' '}

                            </p>

                          </div>
                        </div>

                      </div>
                    </div>
                    {/* CONTACT INFO */}
                    <hr className="g-brd-gray-light-v4 g-my-15" />
                    <div className="g-py-10">
                      <div className="row">
                        <div className="col-lg-2">
                          <img className="img-fluid w-10 g-mt-0" src={arthurcv} alt="Arthur Azatian CV" />
                        </div>
                        <div className="col-lg-4">
                          <ul className="list-unstyled g-color-gray-dark-v5 g-font-size-13 g-mb-0">
                            <li className="g-mb-10">
                              <i className="g-pos-rel g-mt-1 mr-2 icon-communication-062 u-line-icon-pro" />
                              <a href="mailto:cmo@ponics.tech">cmo@ponics.tech</a>
                            </li>
                            <li>
                              <i className="g-pos-rel g-top-1 mr-2 icon-electronics-005 u-line-icon-pro" />
                              <a href="tel:+17472207619"><em className="g-font-style-normal">+1 (747) 220 76 19</em></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Experience */}
                    <hr className="g-brd-gray-light-v4 g-my-15" />
                    <div className="card border-0 rounded-0 g-mb-40">
                      {/* Panel Header */}
                      <div className="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15">
                        <h3 className="h6 mb-0">
                          <i className="icon-briefcase g-pos-rel g-top-1 g-mr-5" />
                          {' '}
Experience
                        </h3>
                      </div>
                      {/* End Panel Header */}
                      {/* Panel Body */}
                      <div className=" g-pa-0 ">
                        <ul className="row u-timeline-v2-wrap list-unstyled">
                        <li className="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md">
                          <div className="row">
                              {/* Timeline Date */}
                              <div className="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md">
                                <h4 className="h5 g-font-weight-300">Cheif Marketing Officer</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2019-Present</h5>
                              </div>
                              {/* End Timeline Date */}
                              {/* Timeline Content */}
                              <div className="col-md-9 align-self-center g-orientation-left g-pl-40--md">
                                {/* Timeline Dot */}
                                <div className="g-hidden-sm-down u-timeline-v2__icon g-top-35">
                                  <i className="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle" />
                                </div>
                                {/* End Timeline Dot */}
                                <article className="g-pa-10--md">
                                  <h3 className="h4 g-font-weight-300">Ponics Technologies Inc.</h3>
                                  <p className="mb-0">
                                  Ponics Technologies is a high-end industrial aeroponics system developer. As a CMO working on the first branch of the company on the North American Continent.
                                  </p>
                                </article>
                              </div>
                              {/* End Timeline Content */}
                            </div>
                        </li>
                          <li className="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md">
                          <div className="row">
                              {/* Timeline Date */}
                              <div className="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md">
                                <h4 className="h5 g-font-weight-300">Education</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2019-2020</h5>
                              </div>
                              {/* End Timeline Date */}
                              {/* Timeline Content */}
                              <div className="col-md-9 align-self-center g-orientation-left g-pl-40--md">
                                {/* Timeline Dot */}
                                <div className="g-hidden-sm-down u-timeline-v2__icon g-top-35">
                                  <i className="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle" />
                                </div>
                                {/* End Timeline Dot */}
                                <article className="g-pa-10--md">
                                  <h3 className="h4 g-font-weight-300">University of California, Loa Angeles</h3>
                                  <p className="mb-0">
General Business Studies with Concentration in Real Estate

                                  </p>
                                </article>
                              </div>
                              {/* End Timeline Content */}
                            </div>
                        </li>
                          <li className="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md">
                            <div className="row">
                              {/* Timeline Date */}
                              <div className="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md">
                                <h4 className="h5 g-font-weight-300">Executive Director</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2013-2019</h5>
                              </div>
                              {/* End Timeline Date */}
                              {/* Timeline Content */}
                              <div className="col-md-9 align-self-center g-orientation-left g-pl-40--md">
                                {/* Timeline Dot */}
                                <div className="g-hidden-sm-down u-timeline-v2__icon g-top-35">
                                  <i className="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle" />
                                </div>
                                {/* End Timeline Dot */}
                                <article className="g-pa-10--md">
                                  <h3 className="h4 g-font-weight-300">Real Estate Company "Stroy Alliance"</h3>
                                  <p className="mb-0">
Senior managing executive of a commercial real estate company.
Strategic property management.

                                  </p>
                                </article>
                              </div>
                              {/* End Timeline Content */}
                            </div>
                          </li>
                          <li className="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md">
                            <div className="row">
                              {/* Timeline Date */}
                              <div className="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md">
                                <h4 className="h5 g-font-weight-300">Founder</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2015 - 2018</h5>
                              </div>
                              {/* End Timeline Date */}
                              {/* Timeline Content */}
                              <div className="col-md-9 align-self-center g-orientation-left g-pl-40--md">
                                {/* Timeline Dot */}
                                <div className="g-hidden-sm-down u-timeline-v2__icon g-top-35">
                                  <i className="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle" />
                                </div>
                                {/* End Timeline Dot */}
                                <article className="g-pa-10--md">
                                  <h3 className="h4 g-font-weight-300">Performance & Drifting Driving Academy</h3>
                                  <p className="mb-0">
Created and developed first Russian extreme driving school, leasing & maintaining race-ready cars. Retained Porsche Russia’s chief driving instructor as Senior Coach.
Developed a safe racing community of more than 5,000 members as a charitable community initiative, giving Russian street racers access to a track and reducing potentially unsafe racing on public roads.

                                  </p>
                                </article>
                              </div>
                              {/* End Timeline Content */}
                            </div>
                          </li>
                          <li className="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md">
                            <div className="row">
                              {/* Timeline Date */}
                              <div className="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md">
                                <h4 className="h5 g-font-weight-300">Founder</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2013</h5>
                              </div>
                              {/* End Timeline Date */}
                              {/* Timeline Content */}
                              <div className="col-md-9 align-self-center g-orientation-left g-pl-40--md">
                                {/* Timeline Dot */}
                                <div className="g-hidden-sm-down u-timeline-v2__icon g-top-35">
                                  <i className="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle" />
                                </div>
                                {/* End Timeline Dot */}
                                <article className="g-pa-10--md">
                                  <h3 className="h4 g-font-weight-300">Shower5.ru</h3>
                                  <p className="mb-0">
Developed eCommerce business from inception to become one of top 5 in the local market.
Successfully sold the business, which is still working and occupies a leading market position

                                  </p>
                                </article>
                              </div>
                              {/* End Timeline Content */}
                            </div>
                          </li>
                          <li className="col-md-12">
                            <div className="row">
                              {/* Timeline Date */}
                              <div className="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md">
                                <h4 className="h5 g-font-weight-300">Graduated</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2006 - 2011</h5>
                              </div>
                              {/* End Timeline Date */}
                              {/* Timeline Content */}
                              <div className="col-md-9 align-self-center g-orientation-left g-pl-40--md">
                                {/* Timeline Dot */}
                                <div className="g-hidden-sm-down u-timeline-v2__icon g-top-35">
                                  <i className="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle" />
                                </div>
                                {/* End Timeline Dot */}
                                <article className="g-pa-10--md">
                                  <h3 className="h4 g-font-weight-300">Moscow State Industrial University (MSIU).</h3>
                                  <p className="mb-0">Engineer's degree, Automotive</p>
                                </article>
                              </div>
                              {/* End Timeline Content */}
                            </div>
                          </li>
                        </ul>
                          
                      </div>
                      {/* End Panel Body */}
                    </div>

                  </figure>

                </div>
              </div>
            </div>
          </section>
        </div>
        
      </Layout>
    );
  }
}

export default Index;

