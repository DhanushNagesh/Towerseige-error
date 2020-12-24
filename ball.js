class Poly {
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':1.2,
          'density':0.2
      }
      this.poly = Bodies.circle(x,y,r,options)  
      World.add(world, this.poly);
      this.r=r
    }
    display(){
      var pos =this.poly.position;
      var angle = this.poly.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(RADIUS);
      stroke("black")
      strokeWeight(4)
      fill("Yellow");
      ellipse(0,0, this.r,this.r);
      pop();
    }
  };
  