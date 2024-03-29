const container = document.querySelector(".container");
const gridContainer = document.querySelector(".grid");
const body = document.querySelector("body");

let pixels;

const createRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
};

const createGrid = (pixels = "16") => {
    for (let i = 0; i < pixels; i++) {
        for (let j = 0; j < pixels; j++) {
            const row = document.createElement("div");
            row.classList.add("row");

            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridSquare.style.width = "calc(100% / " + pixels + ")";
            gridSquare.style.height = "calc(100% / " + pixels + ")";

            gridSquare.addEventListener("mouseover", () => {
                gridSquare.style.backgroundColor = createRandomColor();
            });

            gridContainer.appendChild(gridSquare);
        }
    }
};

const choosePixel = () => {
    const userPixels = prompt("Enter dimension of pixel:", 16);

    if (userPixels >= 100) {
        return prompt("Enter value less than 100");
    }

    gridContainer.innerHTML = "";
    return createGrid(userPixels);
};

const reset = () => {
    gridContainer.innerHTML = "";
    createGrid();
};

createGrid();