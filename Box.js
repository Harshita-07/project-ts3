class Box {
  constructor(x, y, width, height) {
    var options = {
      restitution:0.8,
      friction:0.2,
      density:1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 225;
    
    World.add(world, this.body);
  }
  display(){
    //console.log(this.body.speed)
    var pos =this.body.position;
    var angle = this.body.angle;
    if(this.body.speed <5){
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
    }
    else {
      push();
      this.visibility =  this.visibility -5;
      pop();
      World.remove(world, this.body)
    }
  }
};
