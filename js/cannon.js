class Cannon{
    constructor(x,y,w,h,angle){
        //variable name = value
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.angle=angle
    }
    display(){
        if(keyIsDown(LEFT_ARROW) &&this.angle>-1.45){
            this.angle=this.angle-0.02
        }
        if(keyIsDown(RIGHT_ARROW) &&this.angle<+0.45){
            this.angle=this.angle+0.02
        }
        //coloring the objects
        fill("grey")
        //restricts the properties to only this particular object
        push()
        //shifts the origin of the canvas
        translate(this.x, this.y)
        //rotates the object from the origin of the canvas
        rotate(this.angle)
        rect(-10,-20,this.w,this.h)
        pop()
        //semi circle starting at 180degree and ending at 360 degrees
        arc(this.x-30,this.y+90,140,200,PI,2*PI)
    }
}

//PI = 180