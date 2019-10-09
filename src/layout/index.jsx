import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

import Footer from '../components/Footer/Footer';


import './assets/vendor/bootstrap/bootstrap.min.css';
import './assets/vendor/bootstrap/offcanvas.css';

import './assets/vendor/icon-awesome/css/font-awesome.min.css';
import './assets/vendor/icon-line/css/simple-line-icons.css';
import './assets/vendor/icon-etlinefont/style.css';
import './assets/vendor/icon-line-pro/style.css';
import './assets/vendor/icon-hs/style.css';
import './assets/vendor/dzsparallaxer/dzsparallaxer.css';
import './assets/vendor/dzsparallaxer/dzsscroller/scroller.css';
import './assets/vendor/dzsparallaxer/advancedscroller/plugin.css';
import './assets/vendor/fancybox/jquery.fancybox.min.css';
import './assets/vendor/typedjs/typed.css';
import './assets/vendor/animate.css';
import './assets/vendor/slick-carousel/slick/slick.css';

import './assets/vendor/hs-megamenu/src/hs.megamenu.css';
import './assets/vendor/hamburgers/hamburgers.min.css';

import './assets/vendor/custombox/custombox.min.css';

import './assets/css/unify-core.css';
import './assets/css/unify-components.css';
import './assets/css/unify-globals.css';


import './assets/css/custom.css';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
        <Footer />
      </div>
    );
  }
}
