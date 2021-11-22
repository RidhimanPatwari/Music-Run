class InvisPlayer {

    constructor(x, y) {
        var options = {
            "isStatic": false,
            "restitution": 0,
            "friction": 0
        }

        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display() {
        push();
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
    }

}