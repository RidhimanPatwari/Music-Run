class Player {

    constructor(x, y) {
        var options = {
            "isStatic": false,
            "restitution": -1,
            "friction": 0,
            "density": 0.001
        }

        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.image = loadImage("smiley_boy.png");
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
    }

}
