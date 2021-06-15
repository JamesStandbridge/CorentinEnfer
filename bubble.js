class Bubble {
  
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.radius = radius;
  }
  
  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  
  show() {
    fill(255,255,255);
    circle(this.x, this.y, this.radius);
  
  }
}