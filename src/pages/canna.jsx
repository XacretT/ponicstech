import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import Header from "../components/Canna/Header";
import HomeSlider from "../components/HomeSlider";
import IconBlocks from "../components/IconBlocks";
import HomeAbout from "../components/HomeAbout";

class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          <Helmet title={config.siteTitle} />

          <SEO />
          <Header />

          {/* <PostListing postEdges={postEdges} /> */}
        </div>
        
      </Layout>
    );
  }
}

export default Index;