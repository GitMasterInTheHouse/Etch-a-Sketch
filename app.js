const container = document.querySelector("#container");
const gridBtn = document.querySelector("#grid-btn");
let gridSize = 16;

function generateGrid(numOfCols) {
  for (let i = 0; i < numOfCols; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.width = container.style.width;
    row.style.height = container.style.width / numOfCols;
    for (let j = 0; j < numOfCols; j++) {
      const col = document.createElement("div");
      col.classList.add("column");
      col.style.width = row.style.width / numOfCols;
      col.style.height = row.style.height;
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

const warningPara = document.createElement("p");
document.querySelector("body").appendChild(warningPara);

gridBtn.addEventListener("click", (e) => {
  gridSize = prompt("Enter grid size:");
  if (gridSize >= 100) {
    warningPara.textContent = "Can't generate grid that large";
  } else if (gridSize) {
    if (document.querySelector(".column")) {
      const rows = document.querySelectorAll(".row");
      rows.forEach((row) => {
        row.remove();
      });
    }
    generateGrid(Number(gridSize));
    draw();
  } else {
    warningPara.textContent = "Failed to generate grid";
  }
});
