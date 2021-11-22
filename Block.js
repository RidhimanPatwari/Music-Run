class Block {
    constructor(x, y) {
        var options = {
            isStatic: false,
            friction: 0,
            restitution: 0,
            density: 1
        }
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.image = loadImage("images/block.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        Matter.Body.setVelocity(this.body, {x: -10, y: 0});
        pop();
    }
    
}