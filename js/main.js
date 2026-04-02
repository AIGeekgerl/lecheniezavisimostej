// Mobile menu
function toggleMob() {
  const nav = document.getElementById('mobNav');
  const hbg = document.getElementById('hbg');
  if (nav) nav.classList.toggle('open');
  if (hbg) hbg.classList.toggle('open');
}
function closeMob() {
  const nav = document.getElementById('mobNav');
  const hbg = document.getElementById('hbg');
  if (nav) nav.classList.remove('open');
  if (hbg) hbg.classList.remove('open');
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(e) {
  const nav = document.getElementById('mobNav');
  const hbg = document.getElementById('hbg');
  if (nav && nav.classList.contains('open')) {
    if (!nav.contains(e.target) && !hbg.contains(e.target)) closeMob();
  }
});

// Modal
function showModal() {
  const m = document.getElementById('modal');
  if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}
function hideModal() {
  const m = document.getElementById('modal');
  if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
}
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') hideModal(); });

// Form submit
function submitForm(e) {
  if (e) e.preventDefault();
  hideModal();
  alert('Спасибо! Наш специалист свяжется с вами в ближайшие 15 минут.');
  return false;
}

// FAQ accordion
function toggleFaq(el) {
  const item = el.closest('.faq-item');
  const answer = item.querySelector('.faq-a');
  const isOpen = answer.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-a.open').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q.open').forEach(q => q.classList.remove('open'));
  // Open clicked if was closed
  if (!isOpen) {
    answer.classList.add('open');
    el.classList.add('open');
  }
}

// Price tabs
function switchTab(id, btn) {
  document.querySelectorAll('.ppanel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
}

// Header scroll shadow
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 30px rgba(0,0,0,.3)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
