// Слайдер
const slider = document.getElementById('slider');
const sliderBar = document.getElementById('slider-bar');
const sliderValue = document.getElementById('slider-value');

slider.addEventListener('mousedown', (event) => {
  const offsetX = event.clientX - slider.offsetLeft;
  const maxSliderWidth = sliderBar.offsetWidth - slider.offsetWidth;

  const moveSlider = (moveEvent) => {
    let newLeft = moveEvent.clientX - offsetX;
    newLeft = Math.max(0, Math.min(newLeft, maxSliderWidth));
    slider.style.left = `${newLeft}px`;
    sliderBar.style.width = `${newLeft + slider.offsetWidth / 2}px`;
    sliderValue.innerText = Math.round((newLeft + slider.offsetWidth / 2) / maxSliderWidth * 100);
  };

  const stopSliderMove = () => {
    document.removeEventListener('mousemove', moveSlider);
    document.removeEventListener('mouseup', stopSliderMove);
  };

  document.addEventListener('mousemove', moveSlider);
  document.addEventListener('mouseup', stopSliderMove);
});
