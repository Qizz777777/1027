let charX;
let charY;
let moveSpeed = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#caf0f8');
  charX = width / 2;
  charY = height / 2;
}

function draw() {
  background('#caf0f8');
  
  // 偵測左右鍵移動
  if (keyIsDown(RIGHT_ARROW)) {
    charX += moveSpeed;
  } else if (keyIsDown(LEFT_ARROW)) {
    charX -= moveSpeed;
  }
  
  // 暫時用一個紅色圓圈代替角色
  fill(255, 0, 0);
  noStroke();
  ellipse(charX, charY, 60, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}