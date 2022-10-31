
gsap.registerPlugin(ScrollTrigger);
gsap.to(".stamp", {
  scrollTrigger: {
    trigger: ".stamp",
    start: "center, center",
    end: "210%, center",
    toggleAction: "reverse",
    scrub: true,
    // pin: true,
    // markers: true
  },
  rotation: 360,
  // duration: 15,
  ease: "sine.inOut",
  // repeat: -1, 
  yoyo: true
})

let arrAnimate = gsap.to(".arrow", { y: -10, duration: 0.3, yoyo: true, repeat: -1, paused: true });


const arrow = document.querySelector('.arrow');
arrow.addEventListener('mouseenter', () => arrAnimate.play(0))
arrow.addEventListener('mouseleave', () => arrAnimate.pause(0));


// swiper
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


gsap.to('.marqueeStyle', {
  xPercent: "-50",
  ease: "none",
  duration: 10,
  repeat: -1
})