class Boat{
    constructor(x, y, width, height,boatPos,boatAni) {
      var options = {
        restitution:0.8,
        friction:1,
        density:1
      };
      this.image = loadImage("assets/boat.png");
      this.width = width;
      this.height = height;
      this.boatAni=boatAni;
      this.speed = 0.05;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.boatPos=boatPos
      World.add(world, this.body);
    }
    animate(){
      this.speed +=0.01
    }
    remove(index){
      this.boatAni=brokenAni
      this.width=300
      this.height=300
      setTimeout(()=>{
        Matter.World.remove(world, boats[index].body);
        boats.splice(index, 1);
        //in milliseconds
      },2000)    
    }
    display() {
      var pos = this.body.position;
      var index = floor(this.speed % this.boatAni.length)
      push()
      translate(pos.x,pos.y)
        rotate(this.body.angle)
      imageMode(CENTER);
      image(this.boatAni[index], 0,this.boatPos, this.width, this.height);
     pop()
    }
  }