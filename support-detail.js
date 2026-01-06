// support-detail.js
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

fetch('support-data.json')
  .then(res => res.json())
  .then(data => {
    const item = data.find(d => d.id === id);
    if (!item) return;

    const container = document.getElementById('detail-container');

    container.innerHTML = `
      <h1>${item.title}</h1>
      <p>${item.description}</p>
      <p>作者: ${item.author} | 日期: ${item.date}</p>
      <div class="image-gallery">
        ${item.images.map(img => `<img src="${img}" alt="${item.title}">`).join('')}
      </div>
      <button onclick="history.back()">返回</button>
    `;
  });
