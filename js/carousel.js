const backwards = document.querySelector(".carousel-backward");
const forwards = document.querySelector(".carousel-forward");
const track = document.querySelector(".frifag-carousel-track");
const slides = Array.from(track.children);
const indicator = document.querySelector(".frifag-carousel-indicator");

let currentIndex = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
  const pebble = document.createElement("span");
  pebble.classList.add("pebble");
  if (index === 0) {
    pebble.classList.add("active");
  }
  pebble.addEventListener("click", () => {
    currentIndex = index;
    updateSlidePosition();
  });
  indicator.appendChild(pebble);
});

/**
 * Updates the position of the slide and indicators based on the current index.
 */
const updateSlidePosition = () => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  const pebbles = Array.from(indicator.children);
  pebbles.forEach((pebble, index) => {
    pebble.classList.toggle("active", index === currentIndex);
  });

  backwards.style.display = currentIndex === 0 ? "none" : "block";
  forwards.style.display = currentIndex === totalSlides - 1 ? "none" : "block";
};

forwards.addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlidePosition();
  }
});

backwards.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlidePosition();
  }
});

window.addEventListener("resize", updateSlidePosition);

updateSlidePosition();
