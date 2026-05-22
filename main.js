// ── Nav: transparent → solid on scroll ──────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Scroll reveal ────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Projects: render from projects.json ─────────────────
function renderProjects(projects) {
  const grid = document.querySelector('#projects .projects-grid');
  grid.innerHTML = projects.map((p, i) => `
    <div class="proj-card reveal${i > 0 ? ' stagger-' + Math.min(i, 3) : ''}">
      <div class="proj-stripe"></div>
      <div class="proj-body">
        <div class="proj-icon">
          <svg width="18" height="18" fill="none" stroke="#06A28C" stroke-width="1.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18M3 15h18M9 3v18"/>
          </svg>
        </div>
        <h3 class="proj-name">${p.name}</h3>
        <p class="proj-desc">${p.description}</p>
        <div class="proj-footer">
          <div class="proj-tags">
            ${p.tags.map(t => `<span class="proj-tag">${t}</span>`).join('')}
          </div>
          <div style="display:flex;gap:10px;align-items:center;">
            ${p.url  ? `<a href="${p.url}"  target="_blank" rel="noopener" class="proj-link">Live <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>` : ''}
            ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener" class="proj-link">GitHub <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Observe newly rendered cards
  document.querySelectorAll('#projects .reveal').forEach(el => observer.observe(el));
}

fetch('projects.json')
  .then(r => r.json())
  .then(renderProjects)
  .catch(err => console.error('Could not load projects.json:', err));
