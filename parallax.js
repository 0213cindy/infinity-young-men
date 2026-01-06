const parallaxImg = document.querySelector('.support-parallax-img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  // 調整速度，越小越慢
  const offset = scrollPosition * 0.3;
  parallaxImg.style.transform = `translateX(-50%) translateY(${offset}px)`;
});
