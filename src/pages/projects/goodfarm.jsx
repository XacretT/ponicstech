import React from 'react'
import Helmet from "react-helmet";
import Layout from "../../layout/index";
import SEO from "../../components/SEO/SEO";
import Header from '../../components/Header'

import backgroundimg from './goodfarm/bg.jpg'

import img1 from './goodfarm/1.jpg'
import img2 from './goodfarm/2.jpg'
import img3 from './goodfarm/3.jpg'
import img4 from './goodfarm/4.jpg'
import img5 from './goodfarm/5.jpg'

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
As a result, we were able to harvest up to 1.5 tons of fresh basil every 31 days from one such greenhouse
                </p>
              </div>
            </div>
            <div className="col-md-4 g-mb-30">
              {/* Client */}
              <div className="mb-5">
                <h3 className="h5 g-color-black mb-3">Productivity:</h3>

                <div class="media g-mb-5">
                    <div class="d-flex align-self-center mr-3">
                      <span class="u-icon-v3 u-icon-size--sm  g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                        <i class="fa fa-bomb"></i>
                      </span>
                    </div>
                    <div class="media-body align-self-center">
                      <h3 class="h6 g-color-black mb-0">1.5 tons babyleaf /mnth from 5400sqft</h3>
                    </div>
                  </div>

                  <div class="media g-mb-15">
                    <div class="d-flex align-self-center mr-3">
                      <span class="u-icon-v3 u-icon-size--sm  g-color-gray-dark-v4 g-bg-secondary g-bg-primary--hover g-color-white--hover rounded-circle">
                        <i class="fa fa-thumbs-o-up"></i>
                      </span>
                    </div>
                    <div class="media-body align-self-center">
                      <h3 class="h6 g-color-black mb-0">Growing: basil, arugula, salads</h3>
                    </div>
                  </div>
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
          <div className="row ">
  <div className="col-md-2">
    <a className="js-fancybox d-block u-block-hover u-bg-overlay g-bg-black-opacity-0_3--after g-bg-transparent--hover--after" href="javascript:;" data-fancybox="lightbox-gallery--14" data-src={img1} data-caption="GoodFarm by Ponics Technologies">
      <img className="img-fluid u-block-hover__main--zoom-v1" src={img1} alt="GoodFarm by Ponics Technologies" />
    </a>
  </div>
  <div className="col-md-2">
    <a className="js-fancybox d-block u-block-hover u-bg-overlay g-bg-black-opacity-0_3--after g-bg-transparent--hover--after" href="javascript:;" data-fancybox="lightbox-gallery--14" data-src={img2} data-caption="GoodFarm by Ponics Technologies">
      <img className="img-fluid u-block-hover__main--zoom-v1" src={img2} alt="GoodFarm by Ponics Technologies" />
    </a>
  </div>
  <div className="col-md-2">
    <a className="js-fancybox d-block u-block-hover u-bg-overlay g-bg-black-opacity-0_3--after g-bg-transparent--hover--after" href="javascript:;" data-fancybox="lightbox-gallery--14" data-src={img3} data-caption="GoodFarm by Ponics Technologies">
      <img className="img-fluid u-block-hover__main--zoom-v1" src={img3} alt="GoodFarm by Ponics Technologies" />
    </a>
  </div>
  <div className="col-md-2">
    <a className="js-fancybox d-block u-block-hover u-bg-overlay g-bg-black-opacity-0_3--after g-bg-transparent--hover--after" href="javascript:;" data-fancybox="lightbox-gallery--14" data-src={img4} data-caption="GoodFarm by Ponics Technologies">
      <img className="img-fluid u-block-hover__main--zoom-v1" src={img4} alt="GoodFarm by Ponics Technologies" />
    </a>
  </div>
  <div className="col-md-2">
    <a className="js-fancybox d-block u-block-hover u-bg-overlay g-bg-black-opacity-0_3--after g-bg-transparent--hover--after" href="javascript:;" data-fancybox="lightbox-gallery--14" data-src={img5} data-caption="GoodFarm by Ponics Technologies">
      <img className="img-fluid u-block-hover__main--zoom-v1" src={img5} alt="GoodFarm by Ponics Technologies" />
    </a>
  </div>
</div>

          {/* End Cube Portfolio Blocks - Content */}
        </section>



      </Layout>
    );
  }
}

export default Index;


