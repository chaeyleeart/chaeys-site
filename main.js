// Progressive enhancement for the mobile navigation.
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  document.documentElement.classList.add('menu-ready');
  const setOpen = (open) => {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    toggle.textContent = open ? '×' : '≡';
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  links.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
  });
  document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) setOpen(false); });
  matchMedia('(max-width: 720px)').addEventListener('change', () => setOpen(false));
})();
