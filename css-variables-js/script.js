const controls = document.querySelector('.controls');

function handleUpdate(event) {
  console.log(event.target.value);
};

controls.addEventListener('change', handleUpdate);