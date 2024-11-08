let myCircles = [];// Array to store circle 
let numOfCircles = 33;// Number of circles
let bgImage; // Background image
let bottomX = 111; // X position of the semicircles at bottom most(1-5)
let bottomY = 494;  // Y position of semicircles at the bottom most(1-5)
let diameter1 = 34; // Diameter of the semicircles at bottom most(1-5)+bottom big(2&3)
let diameter2 = 25; // Diameter of the semicircles at bottom (2&3)
let spacing1 = 37;  // Spacing between the bottom most semicircles (1-5)
let spacing2 = 105; // Spacing for bottom big semicircles(1&4)
let spacing3 = 43;  // Spacing for bottom small semicircles(2&3)
let topX1 = 148;  // X position for bottom big semicircles(1&4)
let topX2 = 180; // X position for bottom small semicircles(2&3) 
let topY = 445; // Y position for bottom big+small semicircles(1-4)

function preload() {
   // Preload background image
   bgImage = loadImage('assets/background.jpg');
}

// Positions and sizes for circles
let circlePositions = [
    [85,40],[85,85],[90,120],[114,130],[122,153],[120,183],[125,224],[150,248],[175,252],[198,247],
    [222,253],[247,250],[272,248],[280,218],[285,190],[289,158],[285,125],[300,120],[325,125],[350,134],[358,115],
    [180,165],[170,185],[190,183],[210,204],[230,185],[241,170],[210,230],
    [210,289],[200,340],[202,385],[208,410],[200,432]
];
let circleDiameters = [50, 43, 29, 27, 23, 40, 53, 28, 26, 20, 
    31, 22, 33, 35, 25, 44, 20, 15, 33, 22, 20, 
    16, 16, 26, 35, 22, 16, 20, 
    47, 61, 30, 23, 23];

function setup() {
   createCanvas(400, 600);
   
   // Initialize circles with positions and sizes
   for(let i = 0; i < numOfCircles; i++){
       myCircles.push(new MyCircleClass(circlePositions[i][0], circlePositions[i][1], circleDiameters[i]));
    }
}

class MyCircleClass {
   constructor(x, y, size) {
     this.x = x; // X position of circle
     this.y = y; // Y position of circle
     this.initialY = y; // Initial position of the circle
     this.size = size; // Size of circle
     this.stroke = 0; // Stroke weight for circle outline
     this.color1 = color(228, 102, 103); // First color for half of circle (green)
     this.color2 = color(142, 171, 126); // Second color for half of circle (red)
     this.ySpeed = random(3, 7); // Random fall & bounce speed for each circle
     this.bounceTime = 0; // Count the times of bounce
     this.maxBounce = 3; // Max Bounce times
   }
  
   draw() {
    if (this.bounceTime < this.maxBounce) {
      if (!this.bounce) {
        this.y += this.ySpeed;
        if (this.y >= height - this.size / 2) {
          this.bounce = true;
        }
      } else {
        this.y -= this.ySpeed;
        if (this.y <= this.initialY) {
          this.y = this.initialY; // Bounce back to the initial position of the circle
          this.bounce = false;
          this.bounceTime++; // Add times of bounce
        }
      }
    }
    fill(this.color1);
    stroke(this.stroke);
    arc(this.x, this.y, this.size, this.size, HALF_PI, -HALF_PI, PIE);
    fill(this.color2);
    arc(this.x, this.y, this.size, this.size, -HALF_PI, HALF_PI, PIE);
   }
}

function draw() {
  // Set background image
  background(bgImage);

    // Draw each circle in the array
    for (let i = 0; i < numOfCircles; i++) {
      myCircles[i].draw();
    }

    stroke(0);
    strokeWeight(2);

    // Bottom green rectangle
    fill(142, 171, 126);
    rect(27, 450, 345, 55);

    // Left and right vertical lines
    line(65, 450, 65, 505);
    line(340, 450, 340, 505);

    // Bottom larger yellow rectangle
    fill(217, 194, 125);
    rect(92, 444, 204, 52);

    // Bottom smaller red rectangle
    stroke(217, 194, 125);
    fill(228, 102, 103);
    rect(130, 446, 35, 48);

    // Bottom smaller green rectangles
    fill(142, 171, 126);
    rect(165, 446, 37, 48);
    rect(237, 446, 35, 48);

    // Rightmost small green semicircle 6
    arc(285, 494, 19, 28, PI, 0, fill(142, 171, 126));

    // Semicircles bottom big 1&4
    for (let i = 0; i < 2; i++) {
      fill(i % 2 === 0 ? color(142, 171, 126) : color(228, 102, 103));
      arc(topX1 + i * spacing2, topY, diameter1, diameter1, 0, PI);
    }

    // Semicircles bottom small 2&3
    for (let i = 0; i < 2; i++) {
      fill(i % 2 === 0 ? color(228, 102, 103) : color(142, 171, 126));
      arc(topX2 + i * spacing3, topY, diameter2, diameter2, 0, PI);
  }

    // Semicircles bottom most 1&2&3
    for (let i = 0; i < 3; i++) {
        fill(i % 3 === 0 ? color(142, 171, 126) : (i % 3 === 1 ? color(217, 194, 125) : color(228, 102, 103)));
        arc(bottomX + i * spacing1, bottomY, diameter1, diameter1, PI, 0);
    }

    // Semicircles bottom most 4&5
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(228, 102, 103) : color(217, 194, 125));
        arc(bottomX + i * spacing1 + 110, bottomY, diameter1, diameter1, PI, 0);
    }     

    // Add black strokes and draw semicircles bottom 1&4
    stroke(0);
    strokeWeight(2);
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(228, 102, 103) : color(142, 171, 126));
        arc(topX1 + i * spacing2, topY, diameter1, diameter1, PI, 0);
    }
    // Add black strokes and draw semicircles bottom 2&3
    for (let i = 0; i < 2; i++) {
        fill(i % 2 === 0 ? color(142, 171, 126) : color(228, 102, 103));
        arc(topX2 + i * spacing3, topY, diameter2, diameter2, PI, 0);
    }

    // Yellow stroke for the bottom rectangle line
    stroke(217, 194, 125);
    line(130, 446, 270, 446);
}
