async function loadProjects() {
  const res = await fetch('projects.json');
  const projects = await res.json();
  const container = document.getElementById('projects');

  container.innerHTML = projects.map(p => `
    <div class="project-card">
      <h2>${p.name}</h2>
      <p>${p.description}</p>
      <div class="project-links">
        ${p.url  ? `<a href="${p.url}"  target="_blank" rel="noopener">Live</a>` : ''}
        ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener">GitHub</a>` : ''}
      </div>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

loadProjects();
