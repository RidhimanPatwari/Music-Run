class PlayerSprite {
    constructor(x, y) {
        var sprite = createSprite(x, y, 100, 100);
        sprite.visible = false;
    }

    display() {
        sprite.visible = true;
    }
}