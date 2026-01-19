// Footer year
const yearEl = document.getElementById('y');
if(yearEl){
  yearEl.textContent = new Date().getFullYear();
}

// Mobile menu toggle
const btn = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

function setExpanded(isOpen){
  if(!btn || !menu) return;

  btn.setAttribute('aria-expanded', String(isOpen));
  menu.hidden = !isOpen;

  const lines = btn.querySelectorAll('span');
  if(lines.length !== 3) return;

  if(isOpen){
    lines[0].style.top = '21px';
    lines[0].style.transform = 'rotate(45deg)';
    lines[1].style.opacity = '0';
    lines[2].style.top = '21px';
    lines[2].style.transform = 'rotate(-45deg)';
  } else {
    lines[0].style.top = '15px';
    lines[0].style.transform = 'rotate(0deg)';
    lines[1].style.opacity = '.9';
    lines[2].style.top = '27px';
    lines[2].style.transform = 'rotate(0deg)';
  }
}

if(btn && menu){
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    setExpanded(!open);
  });

  menu.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(a){
      setExpanded(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') setExpanded(false);
  });
}

// Fake form submit with modal (static site friendly)
const form = document.getElementById('leadForm');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const okBtn = document.getElementById('okBtn');

function openModal(){
  if(!modal) return;
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function hideModal(){
  if(!modal) return;
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    openModal();
    form.reset();
  });
}

[closeModal, okBtn].forEach(el => {
  if(el) el.addEventListener('click', hideModal);
});

if(modal){
  modal.addEventListener('click', (e) => {
    if(e.target === modal) hideModal();
  });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') hideModal();
  });
}
