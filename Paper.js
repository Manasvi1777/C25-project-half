class Paper 
{
    constructor(x,y,r) 
    {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.image=loadImage("paper.png");

      this.r=r
      this.body = Bodies.circle(x,y,r,options);
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      imageMode(CENTER);
      fill("white");
      image(this.image, pos.x, pos.y, this.r, this.r);
    }
  }