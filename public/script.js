const colorPicker = document.getElementById("theme-color");

if (colorPicker) {
  colorPicker.addEventListener("input", (event) => {
    const selectedColor = event.target.value;

    document.documentElement.style.setProperty("--user-clr", selectedColor);
  });
}

const elements = document.querySelectorAll(".message-text");

elements.forEach((element) => {
  const text = element.textContent;
  element.textContent = "";

  for (const char of text) {
    const span = document.createElement("span");
    span.textContent = char;
    if (char === " ") {
      span.className = "space";
      span.textContent = "\u00A0";
    } else {
      span.textContent = char;
      const angle = Math.floor(Math.random() * 10) - 5;
      span.style.transform = `rotate(${angle}deg)`;
    }
    element.appendChild(span);
  }
});
