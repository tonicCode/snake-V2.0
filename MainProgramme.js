
import {Graphics} from "./Graphics.js";
import {Snake} from "./Snake.js";

let graphics =new Graphics();
graphics.toConfigWin();


let snake=new Snake(100,100,20,20);
snake.drawSnake(graphics.ctx);







