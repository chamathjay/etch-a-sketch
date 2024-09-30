const gridContainer = document.querySelector(".grid-container");
let gridSize = 16;

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener("click", () => {
  const newSize = prompt("Enter size for new grid (max 100): ");
  const size = Math.min(Math.max(parseInt(newSize), 1), 100);
  createGrid(size);
});

function createGrid(size) {
  gridContainer.innerHTML = "";

  for (let i = 0; i < size; i++) {
    console.log(i);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.style.width = `calc(100% / ${size})`;
      cell.style.height = `calc(100% / ${size})`;
      cell.style.border = "1px solid #ccc";

      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#000";
      });
      cell.addEventListener("mouseout", () => {
        cell.style.backgroundColor = "#00f";
        // setTimeout(() => {
        //   cell.style.backgroundColor = "";
        // }, 500);
      });
      cell.addEventListener("click", () => {
        cell.style.backgroundColor = "#000fff";
      });
      gridContainer.appendChild(cell);
    }
  }
}

createGrid(gridSize);
