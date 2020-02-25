import React from 'react'
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout/index";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import backgroundimg from "./projects/mint.jpg"

import Header from '../components/Header'
import GoodFarm from '../components/ProjectsShort/goodfarm'
import Mamanatura from '../components/ProjectsShort/mamanatura'
import VegaLife from '../components/ProjectsShort/vegalife'


class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>

        <Helmet title="Ponics Technologies Products">
          <meta name="description" content="Ponics Technologies Inc. Case study, our results and achievements" />
        </Helmet>

        <SEO />
        <Header />


<section className="use-loading g-bg-img-hero" style={{backgroundImage: `url(${backgroundimg})`}}>
  <div className="container g-pos-rel g-z-index-1 g-py-200 g-mt-100">
    <div className="g-mb-40">
      <h1 className="g-color-white g-font-weight-700 g-font-size-80 g-font-size-130--md g-line-height-1_2 mb-0">case study</h1>
      <span className="d-block g-color-white g-font-size-20 g-pos-rel g-top-minus-20--md ml-md-5">our achievements and success</span>
    </div>
   {/* <div className="text-right">
      <a className="js-fancybox g-text-underline--none--hover mb-5" href="javascript:;" data-src="//www.youtube.com/embed/BNpiwOkKIJ8?autoplay=1" data-speed={350} data-caption="Our working process">
        <span className="align-middle u-icon-v3 g-bg-white g-color-black g-color-primary--hover g-rounded-50x mr-2">
          <i className="g-font-size-15 g-pos-rel g-left-2 fa fa-play" />
        </span>
        <span className="d-inline-block g-brd-bottom g-brd-white g-color-white g-font-weight-600 text-uppercase">Our working process</span>
      </a>
    </div> */}
  </div>
</section>

        <GoodFarm />
        <Mamanatura />
        <VegaLife />
      </Layout>
    );
  }
}

export default Index;


