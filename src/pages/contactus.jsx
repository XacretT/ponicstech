import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import ContactForm from '../components/ContactForm'
import Header from '../components/Header'

class Index extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <div className="index-container">
          
          <Helmet title="Ponics Technologies Contact information">
            <meta name="description" content="Ponics Technologies Inc. contact information and location" />
          </Helmet>
          <SEO />
          <Header />
          <ContactForm />
        </div>
        
      </Layout>
    );
  }
}

export default Index;
