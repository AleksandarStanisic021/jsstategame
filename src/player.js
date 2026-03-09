import dogAsset from './dog_left_right_white.png'
let image = new Image();
image.src = dogAsset;

export class Player {
    constructor(gameWidth, gameHight) {
        this.gameWidth = gameWidth;
        this.gameHight = gameHight;
        this.states = [];
        this.currentState = this.states[0];
        this.image = image;
        this.width = 200;
        this.height = 181.83;
        this.x = this.gameWidth / 2 - this.width / 2;
        this.y = this.gameHight - this.height;
        this.frameX = 0;
        this.frameY = 0;
    }
    draw(context) {
        context.drawImage(this.image,
            this.width * this.frameX,
            this.height * this.frameY,
            this.width,
            this.height,
            this.x,
            this.y,
            this.width,
            this.height);
    }

}