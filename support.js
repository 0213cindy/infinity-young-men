// support.js
fetch('support-data.json')
  .then(res => res.json())
  .then(data => {
    const supportList = document.getElementById('support-list');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'support-card';
      card.innerHTML = `
        <img src="${item.images[0]}" alt="${item.title}">
        <div class="card-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      `;

      // 點擊跳轉到詳細頁，帶上 id
      card.addEventListener('click', () => {
        window.location.href = `support-detail.html?id=${item.id}`;
      });

      supportList.appendChild(card);
    });
  });

