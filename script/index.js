(function () {

  'use strict';

  $(document).ready(function () {

    setTimeout(() => {
      $('body').addClass('loaded');
    }, 800);

    gsap.to("#cursor", {
      opacity: 1
    });

    TweenMax.staggerTo(".work", 1, {
      opacity: 1,
      x: 0
    }, .2);

    var skills = $('.skill').toArray();
    skills.sort(function () { return 0.5 - Math.random() });
    TweenMax.staggerTo(skills, 0.3, { autoAlpha: 1, ease: Quad.easeInOut }, 0.1);

    $(document).mousemove(function (e) {
      gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY
      })
    })

    $('*[cursor]').hover(
      function (e) {
        let dataCursor = $(this).attr('data-cursor');
        gsap.to("#cursor", {
          width: 128,
          height: 128,
          top: -64,
          left: -64,
          borderRadius: 0
        });
        $("#cursor").css({
          backgroundImage: `url(${dataCursor})`,
          backgroundColor: 'transparent'
        })
      },
      function (e) {
        gsap.to("#cursor", {
          width: 20,
          height: 20,
          top: -10,
          left: -10,
          borderRadius: '50%'
        });
        $("#cursor").css({
          backgroundImage: `unset`,
          backgroundColor: 'rgb(235, 233, 85)'
        })
      }
    );

    $('#toggle-dark-light').on('click', switchTheme);

    function switchTheme() {
      document.documentElement.toggleAttribute('dark');
    }

  });
})();