$(document).on('ready', function () {
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
    // initialization of autonomous popups
    $.HSCore.components.HSModalWindow.init('.js-autonomous-popup', {
      autonomous: true
    });
  });


  $(document).on('ready', function () {
    // initialization of horizontal progress bars
    var horizontalProgressBars = $.HSCore.components.HSProgressBar.init('.js-hr-progress-bar', {
      direction: 'horizontal',
      indicatorSelector: '.js-hr-progress-bar-indicator'
    });
  });
  
  $(document).on('ready', function () {

    // initialization of HSDropdown component
    $.HSCore.components.HSDropdown.init($('[data-dropdown-target]'), {
      afterOpen: function(){
        $(this).find('input[type="search"]').focus();
      }
    });

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