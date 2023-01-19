$(document).ready(function () {
  var slider = tns({
    container: ".cliente-slider",
    items: 6,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayButtonOutput: false,
    controls: false,
    nav: false,
    speed: 2000,
    autoplayTimeout: 0,
    preventActionWhenRunning: true,
    mouseDrag: true,
    edgePadding: 750,

    responsive: {
      300: {
        gutter: 10,
        items: 2,
      },
      640: {
        gutter: 10,
        items: 2,
      },
      700: {
        gutter: 20,
      },
      900: {
        gutter: 0,
        items: 3,
      },
    },
  });
});
