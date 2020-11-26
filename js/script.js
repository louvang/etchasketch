const canvas = document.querySelector("#canvas");
const clearBtn = document.querySelector("#clear-btn");
const setDimBtn = document.querySelector("#set-size");
const dimInput = document.getElementsByClassName("dim");
const dimXInput = document.querySelector("#dim-x");
const dimYInput = document.querySelector("#dim-y");
const circles = document.getElementsByClassName("circle");
const squares = document.getElementsByClassName("square");
const colorpicker = document.querySelector("#colorpicker"); // input

// ================ DUPLICATE INPUT

const sameInput = (e) => {
  if (e.target.id === "dim-x") {
    dimYInput.value = dimXInput.value;
  } else if (e.target.id === "dim-y") {
    dimXInput.value = dimYInput.value;
  }

  if (e.keyCode === 13) {
    setDim();
  }
};

for (let i = 0; i < 2; i++) {
  dimInput[i].addEventListener("keyup", sameInput);
}

// ================ COLOR CHANGE

const colorSelection = (e) => {
  for (let i = 0; i < circles.length; i++) {
    circles[i].classList.remove("selected");
  }

  function addSelectClass(id) {
    if (id == "colorpicker") {
      document.querySelector("#custom").classList.add("selected");
      // changeColor(colorpicker.value);
      for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", (e) => {
          squares[i].setAttribute(
            "style",
            `background-color: ${colorpicker.value}`
          );
        });
      }
    } else {
      document.querySelector(`#${id}`).classList.add("selected");
      if (id == "eraser") {
        changeColor("#e3d7cf");
      } else if (id == "black") {
        changeColor("#000000");
      } else if (id == "grayscale") {
        changeColor("grayscale");
      }
    }
  }

  addSelectClass(e.target.id);
};

let gradientPhase = "to black";
let toBlackScale = 100;
let toWhiteScale = 0;

const changeColor = (color) => {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", (e) => {
      if (color == "grayscale") {
        if (gradientPhase == "to black") {
          toBlackScale -= 10;
          squares[i].setAttribute(
            "style",
            `background-color: hsl(0, 0%, ${toBlackScale}%)`
          );
          if (toBlackScale == 0) {
            gradientPhase = "to white";
            toBlackScale = 100;
          }
        } else if (gradientPhase == "to white") {
          toWhiteScale += 10;
          squares[i].setAttribute(
            "style",
            `background-color: hsl(0, 0%, ${toWhiteScale}%)`
          );
          if (toWhiteScale == 100) {
            gradientPhase = "to black";
            toWhiteScale = 0;
          }
        }
      } else {
        squares[i].setAttribute("style", `background-color: ${color}`);
      }
    });
  }
};

for (let i = 0; i < circles.length; i++) {
  circles[i].addEventListener("click", colorSelection);
}

colorpicker.addEventListener("click", colorSelection);

// ================ CREATE CANVAS

const createCanvas = (canvasSize) => {
  canvas.setAttribute(
    "style",
    `grid-template-columns: repeat(${canvasSize}, ${400 / canvasSize}px);
     grid-template-rows: repeat(${canvasSize}, ${400 / canvasSize}px);`
  );
  let canvasArea = canvasSize * canvasSize;

  for (let i = 1; i <= canvasArea; i++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    square.setAttribute("id", `square${i}`);
    square.addEventListener("mouseover", (e) => {
      square.setAttribute("style", `background-color: black`);
    });
    square.id = `square${i}`;
    canvas.appendChild(square);
  }
};

// ================ CLEAR CANVAS

const clearCanvas = () => {
  let allSquares = document.getElementsByClassName("square");
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].removeAttribute("style");
  }
};

clearBtn.addEventListener("click", clearCanvas);

// ================ SET DIMENSIONS

const setDim = () => {
  let newSize = dimXInput.value;
  if (newSize > 100) {
    return alert("Please pick a number from 1 to 100.");
  }

  clearCanvas();
  createCanvas(newSize);

  // TODO needs feedback that says new dimensions have been set
};

setDimBtn.addEventListener("click", setDim);

// ================ DEFAULT

createCanvas(16);
