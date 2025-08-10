// main.js - simple SPA navigation & UI utility

document.addEventListener('DOMContentLoaded', () => {
  // Simple navigation example - can expand for SPA logic
  const navLinks = document.querySelectorAll('[data-link]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetPage = e.target.getAttribute('href');
      if (targetPage) {
        window.location.href = targetPage;
      }
    });
  });

  // Add smooth scroll for all anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetID = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetID);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
