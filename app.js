const container = document.querySelector("#container");
let gridSize = 16;

function generateGrid(numOfCols) {
  for (let i = 0; i < numOfCols; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < numOfCols; j++) {
      const col = document.createElement("div");
      col.classList.add("column");
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

function draw() {
  const columns = document.querySelectorAll(".column");
  columns.forEach((column) => {
    column.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "red";
    });
  });
}

generateGrid(gridSize);
draw();
