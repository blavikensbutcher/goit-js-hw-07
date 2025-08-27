function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const bodySelector = document.querySelector("body");

const handleChangeColor = () => {
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  bodySelector.style.backgroundColor = color;
};

btn.addEventListener("click", handleChangeColor);
