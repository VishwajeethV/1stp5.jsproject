function setup() {
  createCanvas(500, 300);
  capture = createCapture(VIDEO);
  capture.size(280, 180);
  capture.hide();
}


function draw() {
  background(255);
  rect(55,28,302,202);
  image(capture, 55, 28, 301, 201);
  circle(55, 30, 20);
  circle(355, 30, 20);
  circle(55, 228, 20);
  circle(355, 228, 20);
}

function take_snapshot() {
  save('Picture.png');
}

