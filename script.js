// Keep the navigation state in sync with native fragment links and history.
const sectionLinks = document.querySelectorAll('.nav-list a[href^="#"]');

function updateCurrentSection() {
  for (const link of sectionLinks) {
    if (link.hash === window.location.hash) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

window.addEventListener('hashchange', updateCurrentSection);
updateCurrentSection();
