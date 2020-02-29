import React from 'react'
import Helmet from "react-helmet";
import Layout from "../../layout/index";
import SEO from "../../components/SEO/SEO";
import Header from '../../components/Header'

import backgroundimg from './goodfarm/bg.jpg'


class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>

        <Helmet title="GoodFarm by Ponics Technologies">
          <meta name="description" content="GoodFarm babyleafs aeroponic farm by Ponics Technologies Inc." />
        </Helmet>

        <SEO />
        <Header />


        <section className="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll loaded dzsprx-readyall" data-options="{direction: 'reverse', settings_mode_oneelement_max_offset: '150'}">
          {/* Parallax Image */}
          <div className="divimage dzsparallaxer--target w-100 g-bg-size-cover" style={{height: '130%', backgroundImage: `url(${backgroundimg})`, transform: 'translate3d(0px, -59.0738px, 0px)'}} />
          {/* End Parallax Image */}
          <div className="container text-centers g-z-index-1 g-py-200">
            <h1 className="g-color-white g-font-weight-700 g-font-size-80 ">GoodFarm</h1>
            <h2 className="g-color-white g-font-weight-500 g-font-size-30 g-mb-25">Babyleafs farm in Moscow Region, built in 2015-2016</h2>
          </div>
        </section>

        <section className="container g-py-100">
          <div className="row g-mb-50">
            <div className="col-md-8 g-mb-30">
              <div className="mb-5">
                <h2 className="g-color-black mb-1">Babyleafs and some more</h2>
                <span className="d-block lead mb-4">Large-scale industrial Aeroponics Farm</span>
                <p>
Our first farm was built as a proof-of-concept project to determine aeroponics capabilities, pros and cons.
                </p>
                <p>
Whole farm consisted of 6 greenhouses 5400sqm each. Greenhouses were equipped with autonomous ventillation and heating systems, water supply and treatment.
                </p>
                <p>
We have choosen H-Type units in this case, because the fit babyleafs cultivation needs most. Each unit had 4 tiers each with independent nozzle and lighting systems. Total planting area of one greenhouse was 7750sqft.
</p>
<p>
As a result, we were able to harvest up to 1.5 tons of fresh basil every 31 days from one such greenhouse</p>
              </div>
                          </div>
            <div className="col-md-4 g-mb-30">
              {/* Client */}
              <div className="mb-5">
                <h3 className="h5 g-color-black mb-3">Productivity:</h3>
                <p className="g-color-gray-dark-v4 ">
                <span class="u-icon-v1 g-mr-10">
  <i class="fa fa-bomb"></i>
</span>1.5 tons babyleaf /mnth from 5400sqft
                </p>                
                <p className="g-color-gray-dark-v4 ">
                <span class="u-icon-v1 g-mr-10 g-mb-15">
  <i class="fa fa-thumbs-o-up"></i>
</span>Growing: basil, arugula, salads
                </p>
              </div>
              {/* End Client */}
              {/* Designers */}
              <div className="mb-5">
                <h3 className="h5 g-color-black mb-3">Engineering apects:</h3>
                <ul className="list-unstyled">
                  <li className="my-3">
                    <a className="g-color-gray-dark-v4 g-text-underline--none--hover" href="#">Aeroponics</a>

                  </li>
                  <li className="my-3">

                    <a className="g-color-gray-dark-v4 g-text-underline--none--hover" href="#">H-Type Unit</a>

                  </li>
                  <li className="my-3">

                    <a className="g-color-gray-dark-v4 g-text-underline--none--hover" href="#">Automatics and SCADA</a>

                  </li>
                  <li className="my-3">

                    <a className="g-color-gray-dark-v4 g-text-underline--none--hover" href="#">Mixing unit</a>
                  </li>
                  <li className="my-3">

                    <a className="g-color-gray-dark-v4 g-text-underline--none--hover" href="#">Plants safety</a>
                  </li>
                </ul>
              </div>
              {/* End Designers */}
            </div>
          </div>
          {/* Cube Portfolio Blocks - Content */}
          <div className="cbp g-mb-100 cbp-caption-active cbp-caption-overlayBottomAlong cbp-ready" data-controls="#filterControls1" data-animation="quicksand" data-x-gap={30} data-y-gap={30} data-media-queries="[{&quot;width&quot;: 1500, &quot;cols&quot;: 3}, {&quot;width&quot;: 1100, &quot;cols&quot;: 3}, {&quot;width&quot;: 800, &quot;cols&quot;: 3}, {&quot;width&quot;: 480, &quot;cols&quot;: 2}, {&quot;width&quot;: 300, &quot;cols&quot;: 1}]" style={{height: 663}}>
            <div className="cbp-wrapper-outer">
              <div className="cbp-wrapper">
                {/* Cube Portfolio Blocks - Item */}
                <div className="cbp-item identity design" style={{width: 350, left: 0, top: 0}}>
                  <div className="cbp-item-wrapper">
                    <div className="u-block-hover g-parent">
                      <img className="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src="../../assets/img-temp/800x500/img1.jpg" alt="Image description" />
                      <div className="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
                        <div className="align-items-end flex-column mt-auto ml-auto">
                          <a className="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle" href="../../assets/img-temp/800x500/img1.jpg">
                    <i className="icon-communication-017 u-line-icon-pro" />
                  </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cube Portfolio Blocks - Item */}
                {/* Cube Portfolio Blocks - Item */}
                <div className="cbp-item design" style={{width: 350, left: 380, top: 0}}>
                  <div className="cbp-item-wrapper">
                    <div className="u-block-hover g-parent">
                      <img className="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src="../../assets/img-temp/760x900/img1.jpg" alt="Image description" />
                      <div className="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
                        <div className="align-items-end flex-column mt-auto ml-auto">
                          <a className="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle" href="../../assets/img-temp/760x900/img1.jpg">
                    <i className="icon-communication-017 u-line-icon-pro" />
                  </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cube Portfolio Blocks - Item */}
                {/* Cube Portfolio Blocks - Item */}
                <div className="cbp-item graphic identity" style={{width: 350, left: 760, top: 0}}>
                  <div className="cbp-item-wrapper">
                    <div className="u-block-hover g-parent">
                      <img className="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src="../../assets/img-temp/800x500/img6.jpg" alt="Image description" />
                      <div className="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
                        <div className="align-items-end flex-column mt-auto ml-auto">
                          <a className="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle" href="../../assets/img-temp/800x500/img6.jpg">
                    <i className="icon-communication-017 u-line-icon-pro" />
                  </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cube Portfolio Blocks - Item */}
                {/* Cube Portfolio Blocks - Item */}
                <div className="cbp-item graphic" style={{width: 350, left: 0, top: 249}}>
                  <div className="cbp-item-wrapper">
                    <div className="u-block-hover g-parent">
                      <img className="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src="../../assets/img-temp/800x500/img4.jpg" alt="Image description" />
                      <div className="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
                        <div className="align-items-end flex-column mt-auto ml-auto">
                          <a className="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle" href="../../assets/img-temp/800x500/img4.jpg">
                    <i className="icon-communication-017 u-line-icon-pro" />
                  </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cube Portfolio Blocks - Item */}
                {/* Cube Portfolio Blocks - Item */}
                <div className="cbp-item graphic" style={{width: 350, left: 760, top: 249}}>
                  <div className="cbp-item-wrapper">
                    <div className="u-block-hover g-parent">
                      <img className="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src="../../assets/img-temp/760x900/img2.jpg" alt="Image description" />
                      <div className="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
                        <div className="align-items-end flex-column mt-auto ml-auto">
                          <a className="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle" href="../../assets/img-temp/760x900/img2.jpg">
                    <i className="icon-communication-017 u-line-icon-pro" />
                  </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cube Portfolio Blocks - Item */}
                {/* Cube Portfolio Blocks - Item */}
                <div className="cbp-item identity" style={{width: 350, left: 380, top: 444}}>
                  <div className="cbp-item-wrapper">
                    <div className="u-block-hover g-parent">
                      <img className="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src="../../assets/img-temp/800x500/img3.jpg" alt="Image description" />
                      <div className="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
                        <div className="align-items-end flex-column mt-auto ml-auto">
                          <a className="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle" href="../../assets/img-temp/800x500/img3.jpg">
                    <i className="icon-communication-017 u-line-icon-pro" />
                  </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cube Portfolio Blocks - Item */}
                {/* Cube Portfolio Blocks - Item */}
                <div className="cbp-item identity" style={{width: 350, height: 165, left: 0, top: 498}}>
                  <div className="cbp-item-wrapper">
                    <div className="u-block-hover g-parent">
                      <img className="img-fluid g-transform-scale-1_1--parent-hover g-transition-0_5 g-transition--ease-in-out" src="../../assets/img-temp/800x380/img1.jpg" alt="Image description" />
                      <div className="d-flex w-100 h-100 g-bg-black-opacity-0_6 opacity-0 g-opacity-1--parent-hover g-pos-abs g-top-0 g-left-0 g-transition-0_3 g-transition--ease-in u-block-hover__additional--fade u-block-hover__additional--fade-in g-pa-20">
                        <div className="align-items-end flex-column mt-auto ml-auto">
                          <a className="cbp-lightbox u-icon-v2 u-icon-size--sm g-brd-white g-color-black g-bg-white rounded-circle" href="../../assets/img-temp/800x380/img1.jpg">
                    <i className="icon-communication-017 u-line-icon-pro" />
                  </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Cube Portfolio Blocks - Item */}
              </div>
            </div>
          </div>
          {/* End Cube Portfolio Blocks - Content */}
        </section>



      </Layout>
    );
  }
}

export default Index;

