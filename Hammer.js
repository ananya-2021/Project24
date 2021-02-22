class Hammer {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':2
    }
    this.body = Bodies.rectangle(x, y, 80,30, options);
    this.width = 80;
    this.height = 30;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    pos.x = mouseX
    pos.y = mouseY
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2);
    stroke("black");
    fill("blue");
    rect(0, 0, this.width, this.height);
    pop();
  }
};