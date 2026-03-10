import dogAsset from './dog_left_right_white.png'
import { StandingLeft, StandingRight,SittingLeft,SittingRight,RunningLeft,RunningRight } from './state';

let image = new Image();
image.src = dogAsset;

export class Player {
    constructor(gameWidth, gameHight) {
        this.gameWidth = gameWidth;
        this.gameHight = gameHight;
        this.states = [new StandingLeft(this), 
        new StandingRight(this),new SittingLeft(this),new SittingRight(this),new RunningLeft(this),new RunningRight(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
        this.image = image;
        this.width = 200;
        this.height = 181.83;
        this.x = this.gameWidth / 2 - this.width / 2;
        this.y = this.gameHight - this.height;
        this.frameX = 0;
        this.frameY = 0;
        this.speed=0;
        this.maxSpeed=10;
    }
    update(input) {
        this.currentState.handleInput(input);
        this.x+=this.speed;
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
    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }
}