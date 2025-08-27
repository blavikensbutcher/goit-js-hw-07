const input = document.querySelector("#name-input");
const nameToChange = document.querySelector("#name-output");
const lastSeen = nameToChange.textContent;

const changeHandler = (e) => {
  const newValue = e.target.value.trim();

  if (newValue.length > 0) {
    nameToChange.textContent = newValue;
  } else {
    nameToChange.textContent = lastSeen;
  }
};

input.addEventListener("input", changeHandler);
