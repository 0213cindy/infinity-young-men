fetch("support-data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("supportCards");

    data.forEach(item => {
      const card = document.createElement("a");
      card.className = "support-card";
      card.href = `support-detail.html?id=${item.id}`;

      card.innerHTML = `
        <img src="${item.image}">
        <p>${item.title}</p>
      `;

      container.appendChild(card);
    });
  });
