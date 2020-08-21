new WOW().init();
var mySwiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".projects-pagination",
    type: "bullets",
    bulletClass: "projects-bullet",
    bulletActiveClass: "prpject-bullet-active",
    clickable: true,
  },
});
