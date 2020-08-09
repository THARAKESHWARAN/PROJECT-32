class Polygons {

    constructor(x, y){
        var options = {
            isStatic: false,
            density: 0.02
        }
        this.body = Bodies.polygon(x, y, 8, 20, options);
        this.image = loadImage("polygon.png");
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 30);
        pop();
    }
}