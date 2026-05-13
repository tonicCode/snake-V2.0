
import {Graphics} from "./Graphics.js";
import {Snake} from "./Snake.js";
import {Deplacement} from './Deplacement.js';

document.addEventListener("DOMContentLoaded",() =>{
  
  


let graphics =new Graphics();

let deplacement=new Deplacement();
//deplacement.toMove();


let snake=new Snake(deplacement);


setInterval(() =>{
 
snake.drawSnake(graphics.ctx,graphics.cnv);
graphics.toCreateGrid();

 //console.log("hi");
//snake.drawSnake();
 
 
},100);






});






