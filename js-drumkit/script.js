const items = document.querySelectorAll('.item');

const addPlaying = (event) => {
  console.log(event.keyCode);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const item = document.querySelector(`.item[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  item.classList.add('playing');

};

const removeTransition = function (event) {
  this.classList.remove('playing');
};

window.addEventListener('keydown', addPlaying);

for (item of items) {
  item.addEventListener('transitionend', removeTransition);
};