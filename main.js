const toggleInput = document.getElementById("mode-toggle");

toggleInput.addEventListener("change", () => {
  document.body.classList.toggle("light");
});
