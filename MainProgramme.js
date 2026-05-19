
import {Graphics} from "./Graphics.js";
import {Snake} from "./Snake.js";
import {Deplacement} from './Deplacement.js';
import {Food} from './Food.js';
import { Game} from "./Game.js";


class MainProgramme{

    constructor(){

  


this.graphics =new Graphics();

this.deplacement=new Deplacement();
//deplacement.toMove();


this.snake=new Snake(this.deplacement);
 this.food=new Food(this.graphics,this.deplacement);
this.game=new Game(this.snake);

this.start();


}

start(){

setInterval(() =>{
 
this.snake.drawSnake(this.graphics.ctx,this.graphics.cnv);
this.graphics.toCreateGrid();


this.food.drawFood(); 

//affiche la position du snake
this.graphics.toDisplay(this.snake.getLocalise());

 this.food.foodColision();


 
},100);


//food.toGenerateRandomPos();



// });
    
    }



}




document.addEventListener("DOMContentLoaded",() =>{

let mp=new MainProgramme();


});
  

