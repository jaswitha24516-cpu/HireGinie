// HireGenie shared components

const LOGO_SVG = `<svg class="logo-h" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="36" height="36" rx="8" fill="url(#logoGrad)"/>
  <rect x="8" y="8" width="6" height="20" rx="2" fill="white"/>
  <rect x="22" y="8" width="6" height="20" rx="2" fill="white"/>
  <rect x="8" y="15" width="20" height="6" rx="2" fill="white" opacity="0.9"/>
  <defs>
    <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36">
      <stop offset="0%" stop-color="#E8272A"/>
      <stop offset="60%" stop-color="#F4622A"/>
      <stop offset="100%" stop-color="#6B3FA0"/>
    </linearGradient>
  </defs>
</svg>`;

function buildNav(activePage) {
  const pages = [
    { href: 'index.html',       label: 'Job Board',  id: 'jobs' },
    { href: 'apply.html',       label: 'Apply',      id: 'apply' },
    { href: 'dashboard.html',   label: 'Dashboard',  id: 'dashboard' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  document.querySelector('nav').innerHTML = `
    <a class="nav-brand" href="index.html">
      ${LOGO_SVG}
      <div class="brand-text">
        <span class="brand-name">HIREGENIE</span>
        <span class="brand-sub">Talent Cloud</span>
      </div>
    </a>
    <ul class="nav-links">
      ${links}
      <li><a href="apply.html" class="nav-cta">Apply Now</a></li>
    </ul>
  `;
}

function showToast(message, type = 'success') {
  const icon = type === 'success' ? '✅' : '❌';
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${message}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

// Format date nicely
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Score ring helper
function scoreRing(score) {
  const n = parseInt(score);
  const cls = n >= 75 ? 'score-high' : n >= 50 ? 'score-mid' : 'score-low';
  return `<div class="score-ring ${cls}">${n || '—'}</div>`;
}
