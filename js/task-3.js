const input = document.querySelector("#name-input");
const nameToChange = document.querySelector("#name-output");

const changeHandler = (e) => {
  const newValue = e.target.value.trim();

  if (newValue.length > 0) {
    nameToChange.textContent = newValue;
  } else {
    nameToChange.textContent = "Anonymous";
  }
};

input.addEventListener("input", changeHandler);
