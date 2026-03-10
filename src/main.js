import './style.css'
import { Player } from './player.js';
import { InputHandler } from './input.js';
import { drawStatusText } from './utils.js';


let canvas = document.getElementById('canvas');
let lasttime=0;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let p = new Player(canvas.width, canvas.height);
const input = new InputHandler();



function animate(timestamp) {
  let delta=timestamp-lasttime;
  lasttime=timestamp;
  drawStatusText(ctx, input);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  p.update(input.lastKey);
  p.draw(ctx,delta);
  drawStatusText(ctx, input);
  requestAnimationFrame(animate);
}
animate(0);






