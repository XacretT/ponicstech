/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from 'gatsby-link'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        
        <script src={withPrefix('/assets/vendor/jquery/jquery.min.js')}></script>
  <script src={withPrefix('/assets/vendor/jquery-migrate/jquery-migrate.min.js')}></script>
  <script src={withPrefix('/assets/vendor/popper.js/popper.min.js')}></script>
  <script src={withPrefix('/assets/vendor/bootstrap/bootstrap.min.js')}></script>
  <script src={withPrefix('/assets/vendor/bootstrap/offcanvas.js')}></script>

  <script src={withPrefix('/assets/vendor/appear.js')}></script>
  <script src={withPrefix('/assets/vendor/hs-megamenu/src/hs.megamenu.js')}></script>
  <script src={withPrefix('/assets/vendor/dzsparallaxer/dzsparallaxer.js')}></script>
  <script src={withPrefix('/assets/vendor/dzsparallaxer/dzsscroller/scroller.js')}></script>
  <script src={withPrefix('/assets/vendor/dzsparallaxer/advancedscroller/plugin.js')}></script>
  <script src={withPrefix('/assets/vendor/masonry/dist/masonry.pkgd.min.js')}></script>
  <script src={withPrefix('/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js')}></script>
  <script src={withPrefix('/assets/vendor/fancybox/jquery.fancybox.min.js')}></script>
  <script src={withPrefix('/assets/vendor/typedjs/typed.min.js')}></script>
  <script src={withPrefix('/assets/vendor/circles/circles.min.js')}></script>
  <script src={withPrefix('/assets/js/hs.core.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.header.js')}></script>
  <script src={withPrefix('/assets/js/helpers/hs.hamburgers.js')}></script>
  <script src={withPrefix('/assets/js/helpers/hs.height-calc.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.tabs.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.popup.js')}></script>
  <script src={withPrefix('/assets/js/components/text-animation/hs.text-slideshow.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.rating.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.onscroll-animation.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.counter.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.chart-pie.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.go-to.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.sticky-block.js')}></script>
  <script src={withPrefix('/assets/vendor/jquery.countdown.min.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.countdown.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.dropdown.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.progress-bar.js')}></script>


<script src={withPrefix('/assets/vendor/hs-bg-video/hs-bg-video.js')}></script>
<script src={withPrefix('/assets/vendor/hs-bg-video/vendor/player.min.js')}></script>

<script src={withPrefix('/assets/js/helpers/hs.bg-video.js')}></script>

<script src={withPrefix('/assets/vendor/slick-carousel/slick/slick.js')}></script>
<script src={withPrefix('/assets/js/components/hs.carousel.js')}></script>
<script src={withPrefix('/assets/clipboard.min.js')}></script>


  <script src={withPrefix('/assets/vendor/custombox/custombox.min.js')}></script>
  <script src={withPrefix('/assets/js/components/hs.modal-window.js')}></script>

  <script
    dangerouslySetInnerHTML={{
    __html: `
    
    $(document).on('ready', function () {
      console.log("DOC READY");
      // initialization of countdowns
      var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {
        yearsElSelector: '.js-cd-years',
        monthElSelector: '.js-cd-month',
        daysElSelector: '.js-cd-days',
        hoursElSelector: '.js-cd-hours',
        minutesElSelector: '.js-cd-minutes',
        secondsElSelector: '.js-cd-seconds'
      });
    });
  
    $(document).on('ready', function () {
  
      // initialization of horizontal progress bars
      var horizontalProgressBars = $.HSCore.components.HSProgressBar.init('.js-hr-progress-bar', {
          direction: 'horizontal',
          indicatorSelector: '.js-hr-progress-bar-indicator'
      });
  
      // initialization of autonomous popups
      $.HSCore.components.HSModalWindow.init('.js-autonomous-popup', {
          autonomous: true
      });
  
      // initialization of HSDropdown component
      $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'));
  
      // initialization of sticky blocks
        setTimeout(function() {
          $.HSCore.components.HSStickyBlock.init('.js-sticky-block');
        }, 300);
        console.log("sticky blocks ");
      // initialization of carousel
      $.HSCore.components.HSCarousel.init('.js-carousel');
  
      // initialization of CopyToClipboardButton
      new ClipboardJS('.btn');
  
      // initialization of popovers
      $('[data-toggle="popover"]').popover();
  
      
      // initialization of tabs
      $.HSCore.components.HSTabs.init('[role="tablist"]');
  
      // initialization of popups
      $.HSCore.components.HSPopup.init('.js-fancybox');
  
      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');
    });
  
   $(document).on('ready', function () {
    // initialization of video on background
    $.HSCore.helpers.HSBgVideo.init('.js-bg-video')
  
    // initialization of tabs
    $.HSCore.components.HSTabs.init('[role="tablist"]');
  
    // initialization of header height offset
    $.HSCore.helpers.HSHeightCalc.init();
  
    // initialization of scroll animation
    $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');
  
    // initialization of counters
    var counters = $.HSCore.components.HSCounter.init('[class*="js-counter"]');
  
    // initialization of chart pies with rtl option
    var rtlItems = $.HSCore.components.HSChartPie.init('.js-pie-rtl', {
      rtl: true
    });
  
    // initialization of rating
    $.HSCore.components.HSRating.init($('.js-rating'), {
      spacing: 4
    });
  
    // initialization of popups with media
    $.HSCore.components.HSPopup.init('.js-fancybox-media', {
      helpers: {
        media: {},
        overlay: {
          css: {
            'background': 'rgba(255, 255, 255, .8)'
          }
        }
      }
    });
  
    // initialization of text animation (typing)
    $(".u-text-animation.u-text-animation--typing").typed({
      strings: [
        "awesome template",
        "perfect template",
        "just like a boss"
      ],
      typeSpeed: 60,
      loop: true,
      backDelay: 1500
    });
  
    // initialization of go to
    $.HSCore.components.HSGoTo.init('.js-go-to');
  });
  
  $(window).on('load', function () {
    // initialization of header
    $.HSCore.components.HSHeader.init($('#js-header'));
    $.HSCore.helpers.HSHamburgers.init('.hamburger');
  
    // initialization of HSMegaMenu component
    $('.js-mega-menu').HSMegaMenu({
      event: 'hover',
      pageContainer: $('.container'),
      breakpoint: 991
    });
  });
  
  $(window).on('resize', function () {
    setTimeout(function () {
      $.HSCore.components.HSTabs.init('[role="tablist"]');
    }, 200);
  });

        `,
  }}
  />

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
