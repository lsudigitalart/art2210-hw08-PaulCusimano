function setup() {
  createCanvas(600, 600);
  background(220);
}

function createRobot(
  bodyWidth,
  bodyHeight,
  headWidth,
  headHeight,
  eyeSize,
  armLength,
  legLength,
  bodyCol,
  headCol
) {
  let bodyX = width / 2;
  let bodyY = height / 2;
  let neckHeight = 10;

  stroke(0);
  strokeWeight(4);
  rectMode(CENTER);

  // draw robot components
  drawBody(bodyX, bodyY, bodyWidth, bodyHeight, bodyCol);
  drawNeck(bodyX, bodyY - bodyHeight / 2, neckHeight);
  drawHead(
    bodyX,
    bodyY - bodyHeight / 2 - neckHeight - headHeight / 2,
    headWidth,
    headHeight,
    headCol
  );
  let eyeAngle = random(TWO_PI);
  drawEyes(
    bodyX,
    bodyY - bodyHeight / 2 - neckHeight - headHeight / 2,
    headWidth,
    eyeSize,
    eyeAngle
  );
  drawArms(bodyX, bodyY, bodyWidth, armLength);
  drawLegs(bodyX, bodyY + bodyHeight / 2, bodyWidth, legLength);
  drawAntenna(bodyX, bodyY - bodyHeight / 2 - neckHeight - headHeight);
}

function drawBody(x, y, width, height, col) {
  fill(col);
  rect(x, y, width, height, 8);
}

function drawNeck(x, y, height) {
  fill(0);
  rect(x, y - height / 2, 20, height, 0);
}

function drawHead(x, y, width, height, col) {
  fill(col);
  rect(x, y, width, height, 8);

  // semicircle ears
  let earSize = width / 4;
  fill(col);

  arc(x - width / 2 - 2, y, earSize, earSize, HALF_PI, -HALF_PI, OPEN); // Left ear
  arc(x + width / 2 + 2, y, earSize, earSize, -HALF_PI, HALF_PI, OPEN); // Right ear

  // mouth
  line(x - width / 8, y + height / 4, x + width / 8, y + height / 4);
}

function drawEyes(headX, headY, headWidth, eyeSize, angle) {
  let eyeLX = headX - headWidth / 4;
  let eyeLY = headY;
  let eyeRX = headX + headWidth / 4;
  let eyeRY = headY;

  drawEye(eyeLX, eyeLY, eyeSize, angle);
  drawEye(eyeRX, eyeRY, eyeSize, angle);
}

function drawEye(x, y, size, angle) {
  fill(0);
  noStroke();
  ellipseMode(CENTER);
  ellipse(x, y, size, size);
  let offsetX = (size / 4) * cos(angle);
  let offsetY = (size / 4) * sin(angle);

  fill(255);
  ellipse(x + offsetX, y + offsetY, size / 3, size / 3);
}

function drawArms(bodyX, bodyY, bodyWidth, armLength) {
  let armLeftStartX = bodyX - bodyWidth / 2;
  let armLeftStartY = bodyY;
  let armLeftEndX = armLeftStartX - armLength;
  let armLeftEndY = armLeftStartY;

  let armRightStartX = bodyX + bodyWidth / 2;
  let armRightStartY = bodyY;
  let armRightEndX = armRightStartX + armLength;
  let armRightEndY = armRightStartY;

  drawArm(armLeftStartX, armLeftStartY, armLeftEndX, armLeftEndY);
  drawArm(armRightStartX, armRightStartY, armRightEndX, armRightEndY);
}

function drawArm(x1, y1, x2, y2) {
  stroke(0);
  line(x1, y1, x2, y2);
}

function drawLegs(bodyX, bodyY, bodyWidth, legLength) {
  let legLeftStartX = bodyX - bodyWidth / 4;
  let legLeftStartY = bodyY;
  let legLeftEndX = legLeftStartX;
  let legLeftEndY = legLeftStartY + legLength;

  let legRightStartX = bodyX + bodyWidth / 4;
  let legRightStartY = bodyY;
  let legRightEndX = legRightStartX;
  let legRightEndY = legRightStartY + legLength;

  drawLeg(legLeftStartX, legLeftStartY, legLeftEndX, legLeftEndY);
  drawLeg(legRightStartX, legRightStartY, legRightEndX, legRightEndY);
}

function drawLeg(x1, y1, x2, y2) {
  stroke(0);
  line(x1, y1, x2, y2);
}

function drawAntenna(headX, headY) {
  let antennaX1 = headX;
  let antennaY1 = headY;
  let antennaX2 = antennaX1;
  let antennaY2 = antennaY1 - 20;

  stroke(0);
  line(antennaX1, antennaY1, antennaX2, antennaY2);

  fill(0);
  noStroke();
  ellipse(antennaX2, antennaY2, 10, 10);
}

function mouseClicked() {
  background(220);

  let bodyWidth = random(100, 200);
  let bodyHeight = random(100, 200);
  let headWidth = random(40, 100);
  let headHeight = random(60, 100);
  let eyeSize = random(10, 20);
  let armLength = random(30, 60);
  let legLength = random(40, 80);
  let bodyCol = color(random(255), random(255), random(255));
  let headCol = color(random(255), random(255), random(255));

  createRobot(
    bodyWidth,
    bodyHeight,
    headWidth,
    headHeight,
    eyeSize,
    armLength,
    legLength,
    bodyCol,
    headCol
  );
}
