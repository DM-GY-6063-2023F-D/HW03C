let maxPointCount = 50;
let numNeighbors = 2;

let lineWidth = 2;
let circleDiam = 2;

let mpSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mpSlider = createSlider(maxPointCount, 2000, maxPointCount, 50);
  mpSlider.position(10, 10);
  mpSlider.style("width", "400px");
}

function draw() {
  background("white");
  randomSeed(1010);
  strokeWeight(lineWidth);
  stroke(0, 32);

  maxPointCount = mpSlider.value();

  for (let p0 = 0; p0 < maxPointCount / numNeighbors; p0++) {
    let x0 = random(0, width);
    let y0 = random(0, height);
    fill(0, 32);
    ellipse(x0, y0, circleDiam);

    for (let p1 = 0; p1 < numNeighbors - 1; p1++) {
      let x1 = random(0, width);
      let y1 = random(0, height);

      fill(0, 32);
      ellipse(x1, y1, circleDiam);

      fill(0);
      line(x0, y0, x1, y1);
    }
  }
}
