class Box {

  constructor(x, y, col) {
    var options = {
      'restitution': 0.8,
      'friction': 1.0,
      'density': 0.02,
    }
    this.color = col;
    this.body = Bodies.rectangle(x, y, 30, 50, options);
    this.visibility = 255;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    rectMode(CENTER);
    if (this.body.speed < 3) {
      push();
      fill(this.color);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rect(0, 0, 30, 50);
      pop();
    } else {
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
      push();
      fill(this.color);
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      tint(255, this.visibility);
      pop();
    }
  }

  score() {
    if (this.visibility < 0 && this.visibility >= -105) {
      score++
    }
  }
}