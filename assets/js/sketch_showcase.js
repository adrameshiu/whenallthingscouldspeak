

function preload() {
  img = loadImage("/whenallthingscouldspeak/assets/images/HouseOfBlueLights.png");
}


function setup() {
  var zindex = 100;
  //let canvas = createCanvas(windowWidth, windowHeight);
  let canvas = createCanvas(800, 600);
  // canvas.parent('sketch-container')\;
  canvas.parent('stars-id');
  canvas.style.zIndex = zindex;
}

function draw() {
  //background(220);
  //image(img,0, 0);
  stars();

  // noLoop();
}

function stars() {
  fill(random(255));
  circle(random(width), random(height), random(1, 3));
  circle(random(width), random(height), random(1, 3));
}
