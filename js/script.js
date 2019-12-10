$(document).ready(function() {
  $('.menu-toggler').each(function(i, menuToggler) {
    var target = $(menuToggler).data('target');
    var playState = true;
    var navTimeline = new TimelineMax({ paused: true });
    var navBg = $(target).find('.navigation-bg');
    var navInner = $(target).find('.nav-inner');
    var navLinks = $(target).find('.nav-link');
    var animationTime = 0.5;
    var easeIn = Circ.easeIn;
    var easeOut = Circ.easeOut;
    var easeInOut = Circ.easeInOut;
    /**/

    navTimeline
      .fromTo(
        target,
        animationTime,
        { top: '-100%', ease: easeIn },
        {
          top: '0%',
          ease: easeOut,
          onReverseComplete: function() {
            $(menuToggler).removeClass('active');
          }
        }
      )
      .staggerTo(
        navBg,
        animationTime,
        {
          width: '100%',
          ease: easeInOut
        },
        0.25
      )
      .fromTo(
        navInner,
        animationTime,
        {
          right: '-100%',
          ease: easeIn
        },
        {
          right: '0%',
          ease: easeOut
        }
      )
      .staggerFromTo(
        navLinks,
        animationTime,
        { x: '10%', opacity: 0 },
        {
          x: '0%',
          opacity: 1
        },
        0.1
      );

    $(menuToggler).on('click', function() {
      if (playState) {
        playState = false;
        navTimeline.play();
        $(menuToggler).addClass('active');
      } else {
        navTimeline.reverse();
        playState = true;
      }
    });
  });
});
