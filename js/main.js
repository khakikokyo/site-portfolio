// about
// ScrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .9
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// skills
// Swiper
new Swiper('.skills .swiper-container', {
  autoplay: {
    delay: 5000
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  navigation: {
    prevEl: '.skills .swiper-prev',
    nextEl: '.skills .swiper-next'
  },
});