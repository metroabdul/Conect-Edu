// Responsive sidebar toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Optional: Hide sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
  if (
    window.innerWidth <= 768 &&
    !sidebar.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    sidebar.classList.contains('active')
  ) {
    sidebar.classList.remove('active');
  }
});

// Optional: Close sidebar on window resize if greater than 768px
window.addEventListener('resize', () => {
  if(window.innerWidth > 768) {
    sidebar.classList.remove('active');
  }
});
