const counterDisplayElement = document.querySelector('.counter-display');
const lowerCountElement = document.querySelector('.lower-count');
const addCountElement = document.querySelector('.add-count');

let count = 0;

lowerCountElement.addEventListener('click', () => {
  count--;
  updateDisplay();
});

addCountElement.addEventListener('click', () => {
  count++;
  updateDisplay();
})


function updateDisplay() {
  counterDisplayElement.innerHTML = count;

  if (count === 0) {
    counterDisplayElement.style.color = '#e59500';
  } else if (count > 0) {
    counterDisplayElement.style.color = '#002642';
  } else {
    counterDisplayElement.style.color = '#840032';
  };
};

updateDisplay()

