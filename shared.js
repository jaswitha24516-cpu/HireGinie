// HireGenie shared components

// Logo: HireGinie geometric arrow-H — two red chevron/arrow shapes forming an H
// Left shape: right-pointing arrow chevron
// Right shape: left-pointing arrow chevron (mirrored)
// Together they create the distinctive H with inward-pointing notches
const LOGO_SVG = `<img src="hireginie_logo.png" alt="HireGinie Logo" style="height:44px;width:auto;object-fit:contain;"/>`;

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
