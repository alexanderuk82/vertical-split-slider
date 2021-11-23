const container = document.querySelector('.container');

const textSide = document.querySelector('.text-product');
const imageSide = document.querySelector('.image-product');
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');

// We get the number of slides

const slideLength = imageSide.querySelectorAll('div').length;
let activeSlide = 0;

// == We move the the first slide up just the content text

textSide.style.top = `-${(slideLength - 1) * 100}vh`;

// We insert the event on the buttons

btnUp.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));

// We create the Function to call the button actions

const changeSlide = direcction => {
  const sliderHeight = container.clientHeight;
  console.log(sliderHeight);
  if (direcction === 'up') {
    activeSlide++;

    if (activeSlide > slideLength - 1) {
      activeSlide = 0;
    }
  } else if (direcction === 'down') {
    activeSlide--;

    if (activeSlide < 0) {
      activeSlide = slideLength - 1;
    }
  }
  // We move the container to the beginning

  imageSide.style.transform = `translateY(-${activeSlide * sliderHeight}px)`;
  textSide.style.transform = `translateY(${activeSlide * sliderHeight}px)`;
};
