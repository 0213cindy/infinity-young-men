const members = document.querySelectorAll('.member');
const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.querySelector('.close');

members.forEach(member => {
  member.addEventListener('click', () => {
    modalName.textContent = member.dataset.name;
    modalInfo.textContent = member.dataset.info;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const slide = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-slide img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;

function showSlide() {
  const size = slides[0].clientWidth;  // 動態抓取當前寬度
  slide.style.transform = `translateX(${-size * counter}px)`;
}

next.addEventListener('click', () => {
  counter++;
  if (counter >= slides.length) counter = 0;
  showSlide();
});

prev.addEventListener('click', () => {
  counter--;
  if (counter < 0) counter = slides.length - 1;
  showSlide();
});

// 自動播放
setInterval(() => {
  counter++;
  if (counter >= slides.length) counter = 0;
  showSlide();
}, 4000); // 7秒換一張
