// Header greeting
const greeting = document.getElementById("greeting");
const baseGreeting = "Hello";
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");

// Update name ONLY on button click
submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  greeting.textContent = `${baseGreeting}, ${name}`;
});

// Box hover color logic
const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  const color = box.dataset.color;

  box.addEventListener("mouseenter", () => {
    box.style.background = color;
    box.style.color = "white";
  });

  box.addEventListener("mouseleave", () => {
    if (!box.classList.contains("active")) {
      box.style.background = "white";
      box.style.color = "black";
    }
  });

  box.addEventListener("click", () => {
    box.classList.toggle("active");
    
    
    box.classList.add("active");
    box.style.background = color;
    box.style.color = "white";
  });
});
