// About
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

// Skills
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

// Portfolio
// Swiper
new Swiper('.portfolio .swiper-container' ,{
  autoplay: {delay: 2000},
  loop: true
});

// To Top Button
// GSAP/ScrollToplugin
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', function() {
  if(window.scrollY > 500) {
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(toTopEl, .2, {
      x: 200,
    });
  }
}, 300);
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});