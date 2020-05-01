import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Header from '../components/Header'

import michael from './teamphoto/michael.jpg'
import michaelcv from './teamphoto/michael-cv-qr.png'

class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title="Michael Kiselev - Ponics Technologies" />

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
                              <img className="img-fluid w-100" src={michael} alt="Michael Kiselev" />
                            </div>
                            {/* User Image */}
                            {/* User Contact Buttons */}
                            <a className="btn btn-block u-btn-outline-primary g-rounded-50 g-py-12 g-mb-10" href="mailto:ceo@ponics.tech">
                              <i className="icon-envelop-letter g-pos-rel g-top-1 g-mr-5" />
                              {' '}
Write me a mail
                            </a>
                            <a className="btn btn-block u-btn-darkgray g-rounded-50 g-py-12 g-mb-10" href="tel:+79267920192">
                              <i className="icon-call-in g-pos-rel g-top-1 g-mr-5" />
                              {' '}
Call Me
                            </a>
                            {/* End User Contact Buttons */}
                          </div>
                          <div className="col-lg-8">
                            {/* User Details */}
                            <div className="d-flex align-items-center justify-content-sm-between g-mb-5">
                              <h2 className="g-font-weight-300 g-mr-10">Michael Kiselev</h2>
                              <ul className="list-inline mb-0">
                                <li className="list-inline-item g-mx-2">
                                  <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.facebook.com/xacrett">
                                    <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-facebook" />
                                    <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-facebook" />
                                  </a>
                                </li>
                                <li className="list-inline-item g-mx-2">
                                  <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.linkedin.com/in/mihail-kiselov-28358193/">
                                    <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-linkedin" />
                                    <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-linkedin" />
                                  </a>
                                </li>
                                <li className="list-inline-item g-mx-2">
                                  <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://www.instagram.com/xacrett/">
                                    <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-instagram" />
                                    <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-instagram" />
                                  </a>
                                </li>
                                <li className="list-inline-item g-mx-2">
                                  <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://vk.com/xacrett">
                                    <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-vk" />
                                    <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-vk" />
                                  </a>
                                </li>
                                <li className="list-inline-item g-mx-2">
                                  <a className="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="https://twitter.com/xacrett">
                                    <i className="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-twitter" />
                                    <i className="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-twitter" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* End User Details */}
                            {/* User Position */}
                            <h4 className="h6 g-font-weight-300 g-mb-10">
                              <i className="icon-badge g-pos-rel g-top-1 g-mr-5 g-color-gray-dark-v5" />
                              {' '}
Chief Executing Officer, Head Engineer at Ponics Technologies Inc.
                            </h4>
                            {/* End User Position */}
                            {/* User Info */}
                            <ul className="list-inline g-font-weight-300">
                              <li className="list-inline-item g-mr-20">
                                <i className="icon-location-pin g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" />
                                {' '}
Moscow, Russian Federation / Los Angeles, USA
                              </li>

                              <li className="list-inline-item g-mr-20">
                                <i className="icon-link g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5" />  
                                {' '}
                                <a className="g-color-main g-color-primary--hover" href="http://ponics.tech/michael">ponics.tech/michael</a>
                              </li>
                            </ul>
                            {/* End User Info */}
                            <hr className="g-brd-gray-light-v4 g-my-20" />
                            <p className="lead g-line-height-1_8">
                            Experienced engineer with a demonstrated history of working in the agritech industry. Founder of the Ponics Technologies Inc. <br /><br />
                            Has been developing aeroponic plant cultivation methods since 2011. The results of his work formed the basis of the company's business processes and become the major part of our identity.<br /><br />
  Michael is a strong adept of the city-farming concepts and advanced plant cultivation methods.

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
                          Scan with your phone camera to add contact
                          <img className="img-fluid w-10 g-mt-0" src={michaelcv} alt="Michael Kiselev CV" />
                        </div>
                        <div className="col-lg-3">
                          <ul className="list-unstyled g-color-gray-dark-v5 g-font-size-13 g-mb-0">
                            <li className="g-mb-10">
                              <i className="g-pos-rel g-mt-1 mr-2 icon-communication-062 u-line-icon-pro" />
                              <a href="mailto:ceo@ponics.tech">ceo@ponics.tech</a>
                            </li>
                            <li className="g-mb-10">
                              <i className="g-pos-rel g-top-1 mr-2 icon-electronics-005 u-line-icon-pro" />
                              <a href="tel:+17472207619"><em className="g-font-style-normal">+7 (926) 792 01 92</em></a>
                            </li>
                            <li className="g-mb-10">
                              <i className="g-pos-rel g-top-1 mr-2 fa fa-instagram" />
                              <a href="https://www.instagram.com/ponicstech/"><em className="g-font-style-normal">instagram.com/ponicstech</em></a>
                            </li>
                            <li className="g-mb-10">
                              <i className="g-pos-rel g-top-1 mr-2 fa fa-instagram" />
                              <a href="https://www.instagram.com/cannastech/"><em className="g-font-style-normal">instagram.com/cannastech</em></a>
                            </li>
                            <li className="g-mb-10">
                              <i className="g-pos-rel g-top-1 mr-2 fa fa-wifi" />
                              <a href="http://xacrett.com"><em className="g-font-style-normal">http://xacrett.com</em></a>
                            </li>

                          </ul>
                        </div>
                        <div className="col-lg-7">
                          <form className="g-brd-around g-brd-gray-light-v4 g-pa-30 g-mb-30" method="POST" action="https://getform.io/f/bc418bbc-9f8c-4cb4-a77b-7f8d0e8217bb">
                            <h4 className="h6 g-font-weight-700 g-mb-20">Write me a direct message</h4>
                            {/* Text Input with Left Appended Icon */}
                            <div className="form-group g-mb-20">
                              <div className="input-group g-brd-primary--focus">
                                <div className="input-group-prepend">
                                  <span className="input-group-text rounded-0 g-bg-white g-color-gray-light-v1"><i className="icon-user-follow" /></span>
                                </div>
                                <input className="form-control form-control-md border-left-0 rounded-0 pl-0" type="text" name="TOPIC" placeholder="Message topic" />
                              </div>
                            </div>
                            {/* End Text Input with Left Appended Icon */}
                            {/* Text Input with Both Appended Icon */}
                            <div className="form-group g-mb-20">
                              <textarea id="inputGroup2_1" className="form-control form-control-md rounded-0" rows="3" name="MESSAGE" placeholder="Write here your message" />
                            </div>
                            <div className="form-group g-mb-20">
                              <button className="btn u-btn-primary g-mr-10 g-mb-15" type="submit">Send</button>
                            </div>
                          </form>
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
                                <h4 className="h5 g-font-weight-300">Cheif Executive Officer</h4>
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
                                  Ponics Technologies is a high-end industrial aeroponics system developer.
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
                                <h4 className="h5 g-font-weight-300">Head of Economic Department</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2017</h5>
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
                                  <h3 className="h4 g-font-weight-300">JSC Breeding Farm "Chulkovskoe"</h3>
                                  <p className="mb-0">
                                 Agronomy planning and field planting

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
                                <h4 className="h5 g-font-weight-300">Head Engineer</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2014-2016</h5>
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
                                  <h3 className="h4 g-font-weight-300">GoodFarm</h3>
                                  <p className="mb-0">
First Aeroponics farm located in Moscow Region. Reached Yield of up to 1,5tons of basil per month from a greenhouse area of 500sqm

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
                                <h4 className="h5 g-font-weight-300">Deupty Manager of the Bank's affairs</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2013-2014</h5>
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
                                  <h3 className="h4 g-font-weight-300">PAT "Bank "Sofiyskii"</h3>
                                  <p className="mb-0" />
                                </article>
                              </div>
                              {/* End Timeline Content */}
                            </div>
                          </li>
                          <li className="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md">
                            <div className="row">
                              {/* Timeline Date */}
                              <div className="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md">
                                <h4 className="h5 g-font-weight-300">Senior Researcher</h4>
                                <h5 className="h6 g-font-weight-300 mb-0">2019-2013</h5>
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
                                  <h3 className="h4 g-font-weight-300">Academy of Sciences of Ukraine</h3>
                                  <p className="mb-0">
Paton Welding Institute, Development of lithium-containing electrode coatings for welding of tanks of atomic reactors with a low content of diffusion hydrogen

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
                                <h5 className="h6 g-font-weight-300 mb-0">2005 - 2011</h5>
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
                                  <h3 className="h4 g-font-weight-300">National Technical University of Ukraine "KPI"</h3>
                                  <p className="mb-0">Master's degree, Chemical Engineering</p>
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

