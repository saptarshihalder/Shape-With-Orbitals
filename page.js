const instructions = document.querySelector('div#instructions');
const slider = document.querySelector('input#cycle-count');
const sliderDiv = document.querySelector('div#cycle-count-tools');
const cycleValue = document.querySelector('span#cycle-value');
const clearButton = document.querySelector('button#clear-button');
const colorPicker = document.querySelector('input#color-picker');

function showSlider() {
  instructions.style.display = 'none';
  sliderDiv.style.display = 'block';
}

function hideSlider() {
  instructions.style.display = 'block';
  sliderDiv.style.display = 'none';
}

function changeSlider(amount) {
  slider.value = parseInt(slider.value) + amount;
  cycleValue.textContent = slider.value;
}

function setCycleCountSliderRange() {
  let resetValue = (slider.max === slider.min);
  slider.max = n;
  if (resetValue) {
    slider.value = slider.max;
    cycleValue.textContent = slider.value;
  }
}

function getCycleCount() {
  if (cycleCount !== slider.value) {
    traced = [];
    cycleCount = slider.value;
    cycleValue.textContent = cycleCount;
  };
}

function clearDrawing() {
  initialize();
}

setInterval(getCycleCount, 10);

slider.addEventListener('keydown', function (e) {
  if ([37, 38, 39, 40].includes(e.keyCode)) {
    e.preventDefault();
  }
});

clearButton.addEventListener('click', clearDrawing);

colorPicker.addEventListener('input', function () {
  cycleColor = colorPicker.value;
});
