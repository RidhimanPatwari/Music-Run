class InvisBlock {

    constructor(x, y, w, h) {

        var options = {
            "isStatic": true,
            "friction": 0
        }

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;

        this.ground = Bodies.rectangle(this.x, this.y, this.width, this.height, options); 
        World.add(world, this.ground);
    }

    display() {
        var pos = this.ground.position
        rectMode(CENTER);
        fill(rgb(38, 88, 168));
        strokeWeight(7);
        rect(pos.x, pos.y, this.width, this.height);
        strokeWeight(1);
        noFill();
    }

}