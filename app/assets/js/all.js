console.log("Hello!");
const artistSwiper = new Swiper(".works__swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  // centeredSlidesBounds:true,
  initialSlide: 1,
  spaceBetween: 0,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    // stretch: 0,
    depth: 200,
    // modifier: 1,
    scale: 0.7,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
