
import {Graphics} from "./Graphics.js";
import {Snake} from "./Snake.js";
import {Deplacement} from './Deplacement.js';
import {Food} from './Food.js';

document.addEventListener("DOMContentLoaded",() =>{
  
  


let graphics =new Graphics();

let deplacement=new Deplacement();
//deplacement.toMove();


let snake=new Snake(deplacement);
 let food=new Food(graphics,snake.getPosX());


setInterval(() =>{
 
snake.drawSnake(graphics.ctx,graphics.cnv);
graphics.toCreateGrid();


food.drawFood(); 

//affiche la position du snake
graphics.toDisplay(snake.getLocalise());

 
 
 
},100);


//food.toGenerateRandomPos();



});






