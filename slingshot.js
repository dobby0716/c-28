class slingshot{

    constructor(A,B){
        var options={
            bodyA:A,
            pointB:B,
            stiffness:0.004,
            length:20
        }

        this.pointB=B
        this.sling=Constraint.create(options)
        World.add(myWorld,this.sling)
    }

   fly () {
        this.sling.bodyA=null 
    }

    display(){
        //if(this.sling.bodyA!=null)
        if(this.sling.bodyA)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
    }
}