class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.dustbinwidth = width;
      this.dustbinheight = height;
      this.wallthickness = 20;
      this.bottomwall = Bodies.rectangle(x,y,this.dustbinwidth,this.wallthickness,options);
      this.leftwall = Bodies.rectangle(x-this.dustbinwidth/2,y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,options);
      this.rightwall = Bodies.rectangle(x+this.dustbinwidth/2,y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,options);
      World.add(world,this.bottomwall);
      World.add(world,this.leftwall);
      World.add(world,this.rightwall);

      this.image=loadImage("dustbin.png")
    }
    display(){
      var posBottom =this.bottomwall.position;
      var posLeft =this.leftwall.position;
      var posRight =this.rightwall.position;

      rectMode(CENTER);
      fill("blue");
      rect(posLeft.x, posLeft.y, this.wallthickness, this.dustbinheight);
      rect(posRight.x, posRight.y, this.wallthickness, this.dustbinheight);
      rect(posBottom.x, posBottom.y, this.dustbinwidth, this.wallthickness);
    }
  }