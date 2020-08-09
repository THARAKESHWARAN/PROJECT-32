class SlingShot{
    constructor(bodyA, pointB){
        this.options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(this.options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointC = this.pointB;
            push();
            strokeWeight(5);
            line(pointA.x, pointA.y, pointC.x, pointC.y);
            pop();
        }
    }
    
}