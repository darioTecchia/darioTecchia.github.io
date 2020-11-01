(function () {

  'use strict';

  $(document).ready(function () {

    $(document).mousemove(function(e) {
      gsap.to("#cursor", {
        x: e.clientX,
        y: e.clientY
      })
    })

    $('*[cursor]').hover(
      function (e) {
        let dataCursor = $(this).attr('data-cursor');
        console.log(dataCursor);
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
  })


})();