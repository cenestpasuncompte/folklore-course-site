document.addEventListener('DOMContentLoaded', () => {
  // inject PDF links from links.js
  document.querySelectorAll('.reading-actions[data-pdf-id]').forEach(actions => {
    const id = actions.dataset.pdfId;
    const entry = PDF_LINKS[id];
    if (!entry) return;
    actions.querySelector('.btn-read').href     = entry.main;
    actions.querySelector('.btn-download').href = entry.main;
    if (entry.backup) {
      const b = actions.querySelector('.btn-backup');
      b.href   = entry.backup;
      b.hidden = false;
    }
  });

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
