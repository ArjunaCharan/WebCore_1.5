button = document.querySelector(".expander");
grid = document.querySelector(".brands-grid");
button.onclick = function() {
    if (button.classList.contains("min")) {
        document.querySelector(".expander-title").textContent = "Скрыть";
    } else {
        document.querySelector(".expander-title").textContent = "Показать все";
    }
    button.classList.toggle("min");
    button.classList.toggle("max");
    grid.classList.toggle("min");
    grid.classList.toggle("max");
}