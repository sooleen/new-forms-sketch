const gridSize = 22;
const boxSize = 30;
const canvasWidth = 1920;
const canvasHeight = 1080;

const gridOffsetX = 200;
const gridOffsetY = 160;

let grid;
let girdImage;
let clickedCount = 0;

const thresholdCount1 = 100; // Number of filled boxes for 1950
const thresholdCount2 = 100; 

const thresholdCount3 = 130; // Number of filled boxes for 1960
const thresholdCount4 = 130;

const thresholdCount5 = 150; // Number of filled boxes for 1970
const thresholdCount6 = 150;

const thresholdCount7 = 175; // Number of filled boxes for 1980
const thresholdCount8 = 175;

const thresholdCount9 = 200; // Number of filled boxes for 1990
const thresholdCount10 = 200;

const thresholdCount11 = 250; // Number of filled boxes for 2000
const thresholdCount12 = 250;

const thresholdCount13= 300; // Number of filled boxes for 2010
const thresholdCount14 = 300;

const thresholdCount15= 400; // // Number of filled boxes for 2020
const thresholdCount16= 400;



let input;
let searchButton;

// ////////////////////////////////Object mapping input values to number of filled boxes
const fillMapping = {
  1950: 100,
  1960: 130,
  1970: 150,
  1980: 175,
  1990: 200,
  2000: 250,
  2010: 300,
  2020: 400,
  
};

let enterTextX = 1100;
let enterTextY = 190;
let glacierTextX = 1040;
let glacierTextY = 390;
let yearsTextX = 990;
let yearsTextY = 250;
let clickedCountTextX = 200;
let clickedCountTextY = 140;
let thresholdText1X = 200;
let thresholdText1Y = 860;
let thresholdText2X = 850;
let thresholdText2Y = 860;
let dataTextX = 1040;
let dataTextY = 870;
let yearTextX = 205;
let yearTextY = 900;
let mweTextX = 790;
let mweTextY = 900;
let designTextX = 1070;
let designTextY = 900;
let capTextX = 980;
let capTextY = 705;

function preload() {
  myFont = loadFont("FT88-Regular.ttf");
  img1 = loadImage("text.png");
  img_title = loadImage("text_enter_year.png");
  img_cumulative = loadImage("text_subtitle.png");
  img_years = loadImage("text_years.png");
  gridImage = loadImage("glaicer_halftoned 6_20.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  grid = Array(gridSize)
    .fill()
    .map(() => Array(gridSize).fill(false));

  // Fill the grid with 100 random boxes
  for (let i = 0; i < 100; i++) {
    const row = Math.floor(random(gridSize));
    const col = Math.floor(random(gridSize));
    grid[row][col] = true;
    clickedCount++;
  }

  input = createInput();
  input.position(1090, 290);
  input.style("font-size", "24px"); // Increase font size
  input.style("width", "250px"); // Increase width

  input.input(handleInputChange); // Add input event listener

  searchButton = createButton("ENTER");
  searchButton.position(input.x + input.width + 5, 290);
  searchButton.style("font-size", "20px"); // Increase font size
  searchButton.style("height", "32px"); // Increase height
  searchButton.style("font-family", "Arial"); // Change font
  searchButton.mousePressed(fillBoxes);
}


function draw() {
  background(0);
  image(gridImage, gridOffsetX, gridOffsetY, gridSize * boxSize, gridSize * boxSize);


stroke(0,100)
  
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = col * boxSize + gridOffsetX;
      const y = row * boxSize + gridOffsetY;
      
//////////////////////////////////////////////////////////////////GRID COLORS
      
  let r = random(0, 0);
  let g = random(51, 98);
  let b = random(58, 116);
      
      if (grid[row][col]) {
        fill(r,g,b);
      } else if (isHovering(x, y, boxSize)) {
        fill(255,0,0,80);
      } else {
        fill(0,0,0,0);
      }

      rect(x, y, boxSize, boxSize);
    }
  }

  textFont(myFont);
  fill(255);
  textSize(28);
  textAlign(LEFT);
  text("ENTER YEAR BELOW", enterTextX, enterTextY);

  textFont(myFont);
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text("Cumulative Glacier Mass Balance", glacierTextX, glacierTextY);
  text(
    "1950 1960 1970 1980 1990 2000 2010 2020",
    yearsTextX,
    yearsTextY
  );
  
  text("YEAR", yearTextX, yearTextY);
  text("M W.E.", mweTextX, mweTextY);
  
  textFont(myFont);
  fill(255);
  textSize(18);
  textAlign(LEFT);
  text("For more information about the data.",dataTextX, dataTextY);
  text("'Melting Blocks' by Sooleen Kim.",designTextX, designTextY);
  text("*M W.E. = Cumulative glacier mass balance",capTextX, capTextY);
  
  image(img1, 1040, 410, 450, 250);


  fill(255);
  textAlign(LEFT);
  textSize(16);
  text(`Clicked Count: ${clickedCount}`, clickedCountTextX, clickedCountTextY);


  
/////////////////////////////////////////////////THRESHOLDCOUNT1,2 1950
  if (clickedCount >= thresholdCount1 && clickedCount < thresholdCount3) {
    fill(255);
    textSize(28);
    textAlign(LEFT);
    textFont(myFont);
    text("1950", thresholdText1X, thresholdText1Y);
  }

  if (clickedCount >= thresholdCount2 && clickedCount < thresholdCount4) {
    fill(255);
    textSize(28);
    textAlign(RIGHT);
    textFont(myFont);
    text("5", thresholdText2X, thresholdText2Y);
  }
// /////////////////////////////////////////////////THRESHOLDCOUNT3,4 1960 
  if (clickedCount >= thresholdCount3 && clickedCount < thresholdCount5) {
    fill(255);
    textSize(28);
    textAlign(LEFT);
    textFont(myFont);
    text("1960", thresholdText1X, thresholdText1Y);
  }
  
  if (clickedCount >= thresholdCount4 && clickedCount < thresholdCount6) {
    fill(255);
    textSize(28);
    textAlign(RIGHT);
    textFont(myFont);
    text("2", thresholdText2X, thresholdText2Y);
  }
// /////////////////////////////////////////////////THRESHOLDCOUNT5,6 1970 
  
  if (clickedCount >= thresholdCount5 && clickedCount < thresholdCount7) {
    fill(255);
    textSize(28);
    textAlign(LEFT);
    textFont(myFont);
    text("1970", thresholdText1X, thresholdText1Y);
  }
  
  if (clickedCount >= thresholdCount6 && clickedCount < thresholdCount8) {
    fill(255);
    textSize(28);
    textAlign(RIGHT);
    textFont(myFont);
    text("0", thresholdText2X, thresholdText2Y);
  }
// /////////////////////////////////////////////////THRESHOLDCOUNT7,8 1980 
  
  if (clickedCount >= thresholdCount7 && clickedCount < thresholdCount9) {
    fill(255);
    textSize(28);
    textAlign(LEFT);
    textFont(myFont);
    text("1980", thresholdText1X, thresholdText1Y);
  }
  
  if (clickedCount >= thresholdCount8 && clickedCount < thresholdCount10) {
    fill(255);
    textSize(28);
    textAlign(RIGHT);
    textFont(myFont);
    text("-2.5", thresholdText2X, thresholdText2Y);
  }
// /////////////////////////////////////////////////THRESHOLDCOUNT9,10 1990 
  
  if (clickedCount >= thresholdCount9 && clickedCount < thresholdCount11) {
    fill(255);
    textSize(28);
    textAlign(LEFT);
    textFont(myFont);
    text("1990", thresholdText1X, thresholdText1Y);
  }
  
  if (clickedCount >= thresholdCount10 && clickedCount < thresholdCount12) {
    fill(255);
    textSize(28);
    textAlign(RIGHT);
    textFont(myFont);
    text("-5", thresholdText2X, thresholdText2Y);
  }
// /////////////////////////////////////////////////THRESHOLDCOUNT11,12 2000
    if (clickedCount >= thresholdCount11 && clickedCount < thresholdCount13) {
    fill(255);
    textSize(28);
    textAlign(LEFT);
    textFont(myFont);
    text("2000", thresholdText1X, thresholdText1Y);
  }
  
  if (clickedCount >= thresholdCount12 && clickedCount < thresholdCount14) {
    fill(255);
    textSize(28);
    textAlign(RIGHT);
    textFont(myFont);
    text("-10", thresholdText2X, thresholdText2Y);
  }
  
// /////////////////////////////////////////////////THRESHOLDCOUNT13,14 2010
    if (clickedCount >= thresholdCount13 && clickedCount < thresholdCount15) {
    fill(255);
    textSize(28);
    textAlign(LEFT);
    textFont(myFont);
    text("2010", thresholdText1X, thresholdText1Y);
  }
  
  if (clickedCount >= thresholdCount14 && clickedCount < thresholdCount16) {
    fill(255);
    textSize(28);
    textAlign(RIGHT);
    textFont(myFont);
    text("-15", thresholdText2X, thresholdText2Y);
  }


// /////////////////////////////////////////////////THRESHOLDCOUNT15,16 2020
    if (clickedCount >= thresholdCount15) {
    fill(255);
    textSize(28);
    textAlign(LEFT);
    textFont(myFont);
    text("2020", thresholdText1X, thresholdText1Y);
  }
  
  if (clickedCount >= thresholdCount16) {
    fill(255);
    textSize(28);
    textAlign(RIGHT);
    textFont(myFont);
    text("-25", thresholdText2X, thresholdText2Y);
  }
 //-------------------------------------------LINK TO DATA 
  const linkX = 1210;
  const linkY = 820;
  const linkText = "CLICK HERE";
  const linkHTML = '<a href="https://climate.metoffice.cloud/sea-level/glacier_contribution.html"> CLICK HERE </a>'

  fill(255,0,0);
  textSize(50);
  textAlign(LEFT);
  const link = createDiv(linkHTML);
  link.position(linkX, linkY);
  link.style("font-family", "Arial");

}

function mouseClicked() {
  const row = Math.floor((mouseY - gridOffsetY) / boxSize);
  const col = Math.floor((mouseX - gridOffsetX) / boxSize);

  if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
    // Toggle the state of the box
    grid[row][col] = !grid[row][col];

    // Update the clickedCount based on the box state
    clickedCount = grid[row][col] ? clickedCount + 1 : clickedCount - 1;
  }
}

function isHovering(x, y, size) {
  return (
    mouseX >= x && mouseX < x + size && mouseY >= y && mouseY < y + size
  );
}

function fillBoxes() {
  const inputValue = input.value().toUpperCase();
  const number = fillMapping[inputValue];

  if (number !== undefined) {
    // Clear the grid and reset clickedCount
    grid = Array(gridSize)
      .fill()
      .map(() => Array(gridSize).fill(false));
    clickedCount = 0;

    for (let i = 0; i < number; i++) {
      const row = Math.floor(random(gridSize));
      const col = Math.floor(random(gridSize));
      grid[row][col] = true;
      clickedCount++;
    }
  }
}

function handleInputChange() {
  // Clear the grid and reset clickedCount when input value changes
  grid = Array(gridSize)
    .fill()
    .map(() => Array(gridSize).fill(false));
  clickedCount = 0;
}