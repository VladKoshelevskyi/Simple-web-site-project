$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 5,
  nav: true, 
  items: 3,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    640: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
})
