import React from 'react'
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout/index";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

import ProductSlider from '../components/ProductsSlider'
import ProductsHMini from '../components/ProductsHMini'
import ProductsLMini from '../components/ProductsLMini'
import ProductsMMini from '../components/ProductsMMini'
import Header from '../components/Header'


class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
        <Helmet title="Ponics Technologies Products">
            <meta name="description" content="Ponics Technologies Inc. Aeroponics and Hydroponics Products. Growing systems, light, climate, automation - all in one place, smooth-running and 100% integrated" />
          </Helmet>

          <SEO />
          <Header />

          <ProductSlider />
          <ProductsHMini />

          <div className="u-divider u-divider-center u-divider-linear-gradient u-divider-linear-gradient--gray-light-v3 w-50 mx-auto g-my-20">
            <i className="fa fa-circle u-divider__icon g-bg-white g-color-primary" />
          </div>

          <ProductsLMini />

          <div className="u-divider u-divider-center u-divider-linear-gradient u-divider-linear-gradient--gray-light-v3 w-50 mx-auto g-my-20">
            <i className="fa fa-circle u-divider__icon g-bg-white g-color-primary" />
          </div>

          <ProductsMMini />
        </div>

        
      </Layout>
    );
  }
}

export default Index;


