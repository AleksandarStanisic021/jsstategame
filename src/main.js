import './style.css'
import { Player } from './player.js';


let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let p = new Player(canvas.width, canvas.height);

function animate() {
  p.draw(ctx);
  requestAnimationFrame(animate);
}
animate(0);






