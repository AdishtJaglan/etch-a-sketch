const container = document.querySelector(".container");
const grids = document.querySelectorAll(".grid");

const createRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
};

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("grid")

    container.appendChild(square);

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = createRandomColor();
    });
}