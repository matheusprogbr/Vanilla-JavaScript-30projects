const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
};

function toggleActive(e) {
  if (e.propertyName === 'font-size') this.classList.toggle('open-active');
};

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));