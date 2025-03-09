function cardClick() {
  const cardLinks = [
    { selector: '.entrepreneur-card', url: 'entrepreneur.html' },
    { selector: '.agent-card', url: 'agents.html' },
    { selector: '.partner-card', url: 'partners.html' },
  ];

  cardLinks.forEach(({ selector, url }) => {
    const card = document.querySelector(selector);
    if (card) {
      card.addEventListener('click', () => {
        console.log(url);

        window.location.href = url;
      });
    }
  });
}

cardClick();
