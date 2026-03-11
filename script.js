document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.chapter-card');
  const searchInput = document.getElementById('search');
  const noResults = document.querySelector('.no-results');

  // toggle chapter open/close
  cards.forEach(card => {
    card.querySelector('.chapter-head').addEventListener('click', () => {
      card.classList.toggle('open');
    });
  });

  // search
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const text = card.dataset.search;
      const match = !q || text.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    noResults.style.display = visible === 0 ? 'block' : 'none';
  });
});
