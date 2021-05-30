class log extends baseClass{
    constructor(x,y,h,a){
     
        super(x,y,20,h,a)       
         Body.setAngle(this.body,a)
         this.image=loadImage("sprites/wood2.png")
    }
}