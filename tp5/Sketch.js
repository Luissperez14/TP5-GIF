function setup() {
    createCanvas(400, 400);
    noStroke();
  }
  
  function draw() {
    background(30, 30, 30);
    fill(200, 100, 100);
    ellipse(width / 2, height / 2, sin(frameCount * 0.1) * 100 + 150);
  }
  