const container = document.querySelector(".container");
const grids = document.querySelectorAll(".grid");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("grid")

    container.appendChild(square);
}