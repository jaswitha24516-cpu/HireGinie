// HireGenie shared components

// Logo: clean wordmark-style H with a spark/genie element
const LOGO_SVG = `<svg class="logo-h" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="38" height="38" rx="4" fill="#CC0000"/>
  <!-- Bold H letterform -->
  <rect x="7" y="8" width="6" height="22" rx="1" fill="white"/>
  <rect x="25" y="8" width="6" height="22" rx="1" fill="white"/>
  <rect x="7" y="16" width="24" height="6" rx="1" fill="white"/>
  <!-- Small genie spark top-right -->
  <circle cx="31" cy="8" r="3" fill="#FFD700"/>
  <circle cx="31" cy="8" r="1.5" fill="white"/>
</svg>`;

function buildNav(activePage) {
  const pages = [
    { href: 'index.html',     label: 'Job Board',  id: 'jobs' },
    { href: 'apply.html',     label: 'Apply',      id: 'apply' },
    { href: 'dashboard.html', label: 'Dashboard',  id: 'dashboard' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  document.querySelector('nav').innerHTML = `
    <a class="nav-brand" href="index.html">
      ${LOGO_SVG}
      <div class="brand-text">
        <span class="brand-name">Hire<span>Ginie</span></span>
        <span class="brand-sub">Talent Cloud</span>
      </div>
    </a>
    <ul class="nav-links">
      ${links}
      <li><a href="apply.html" class="nav-cta ${activePage === 'apply' ? 'active' : ''}">Apply Now</a></li>
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
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 4000);
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function scoreRing(score) {
  const n = parseInt(score);
  const cls = n >= 75 ? 'score-high' : n >= 50 ? 'score-mid' : 'score-low';
  return `<div class="score-ring ${cls}">${isNaN(n) ? '—' : n}</div>`;
}
