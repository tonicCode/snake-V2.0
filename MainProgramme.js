
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
this.game=new Game(this.snake,this.food);

this.start();


}

start(){

setInterval(() =>{
 
this.snake.drawSnake(this.graphics.ctx,this.graphics.cnv);
this.graphics.toCreateGrid();
this.deplacement.toMove(this.snake.snakeBody,this.snake.snakeIsGrowing);
//console.log("sn b" ,this.snake.snakeBody)

this.food.drawFood(this.game.point); 


//this.food.foodColision()
 this.game.toCountPoints(this.food.foodColision(), this.food.thereIsSpecialFoodCollision);

//affiche la position du snake
this.graphics.toDisplay(this.snake.getLocalise() , this.game.toCountPoints());

//this.snake.update();

//this.food.specialFood(this.game.point);
this.snake.toGrow(this.food.snakeGrow);
 
},100);




//console.log("fff :", this.game.toCountPoints());
//food.toGenerateRandomPos();



// });
    
    }



}




document.addEventListener("DOMContentLoaded",() =>{

let mp=new MainProgramme();


});
  

