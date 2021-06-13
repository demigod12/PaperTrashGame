class Trash{
    constructor(x, y, width, height){
        var options = {
            isStatic: true  
        }
        
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 50;
        this.wallThickness = 50; 

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.width, this.height, this.wallThickness, options);

        this.leftBody = Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.width, this.height, this.wallThickness, options);
        Matter.Body.setAngle(this.leftBody, this.angle);

        this.rightBody = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.width, this.height, this.wallThickness, options);
        Matter.Body.setAngle(this.rightBody, -1*this.angle);

        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
    }
    display(){
        var pos = this.bottomBody.position;
        var angle = this.bottomBody.angle;

        push();
        rectMode(CENTER);
        angleMode(RADIANS);
        rect(pos.x, pos.y+10, this.width, this.wallThickness);
        pop();

        var Lepos = this.leftBody.position;
        var lAngle = this.leftBody.angle;


        push();
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(this.angle);
        rect(Lepos.x, Lepos.y, this.wallThickness, this.height);
        pop();

        var Ripos = this.rightBody.position;
        var rAngle = this.rightBody.angle;


        push();
        rectMode(CENTER);
        angleMode(RADIANS);
        rotate(-1*this.angle);
        rect(Ripos.x, Ripos.y, this.wallThickness, this.height);
        pop();
    
    }

}