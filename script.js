// Header greeting
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const submitBtn = document.getElementById("submitBtn");

// Update name ONLY on button click
submitBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  greeting.textContent = `Hello, ${name}`;
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
    
    // If active, ensure color is set (redundant if hovering, but good for safety)
    // If we just toggled OFF, we might want to reset if mouse is NOT over? 
    // Usually click happens while hovering. 
    // If I toggle OFF while hovering, mouseenter is still active? 
    // Actually, if I toggle off, I'm still hovering, so it should stay colored until I leave.
    // So toggle logic:
    // 1. Click -> active=true. Color matches dataset.
    // 2. Click -> active=false. Color matches dataset (because I'm still hovering!). 
    //    Then when I leave, mouseleave checks active. If false, it resets.
    
    // So actually simple toggle is fine.
    // However, to strictly follow "filled colour... should remain", I will just ADD 'active'.
    // But allowing toggle off is standard UX. I'll stick to toggle for robustness unless user complains.
    // Wait, simpler interpretation: "click to fill". 
    // I will use `classList.add("active")` to ensure it "remains". 
    // If they want toggle they can ask. The request specifically emphasized "remain".
    
    box.classList.add("active");
    box.style.background = color;
    box.style.color = "white";
  });
});
