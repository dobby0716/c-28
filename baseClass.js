class baseClass{
    constructor(x,y,w,h,a){
        var boptions={
            restitution: 1,
            friction: 1
        }
        
         this.body=Bodies.rectangle(x,y,w,h,boptions)
         this.w=w
         this.h=h
         World.add(myWorld,this.body)
         this.image=loadImage("sprites/base.png")
    }

    display(){

        push();
        imageMode(CENTER)
        fill("red")
        angleMode(RADIANS)
        strokeWeight(5)
        stroke("pink")
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        image(this.image,0,0,this.w,this.h)  
        pop();
    }

}