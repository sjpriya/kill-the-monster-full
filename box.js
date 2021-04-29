class Box {
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:1,
            density:0.04

        }
        this.w=100;
        this.h=100;
        this.body=Bodies.rectangle(x,y,this.w,this.h,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.w,this.h);
        pop();
    }
}