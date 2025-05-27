const slides = document.querySelectorAll('.slide');

let counter = 0;

// Position each slide horizontally
slides.forEach((slide, index) => {
  slide.style.bottom = `${index * 100}%`;
});

const nextImage = () => {
  counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
  slideImage();
};

const prevImage = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateY(${counter * 100}%)`;
  });
};
