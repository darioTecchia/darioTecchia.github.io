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
          width: 64,
          height: 64,
          top: -32,
          left: -32
        });
        $("#cursor").css({
          backgroundImage: `url(${dataCursor})`
        })
      },
      function (e) {
        gsap.to("#cursor", {
          width: 20,
          height: 20,
          top: -10,
          left: -10
        });
        $("#cursor").css({
          backgroundImage: `unset`
        })
      }
    );
  })


})();