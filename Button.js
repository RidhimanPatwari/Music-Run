class Button {


    constructor(x, y, w, h, r, o, id) {
        this.id = id;
        this.btnString = '<button id="' + this.id + '" style="display:block; border-radius='+r+'; width:'+w+'; height:'+h+'; position: absolute; left:'+x+'; top:'+y+'" ></button>';
        this.counter = 1;
        this.o = o;
    }

    display() {
        if (this.counter === 1) {
            document.write(this.btnString);
            document.getElementById(this.id).style.opacity = this.o;
            this.counter++;
        }
        
    }

}