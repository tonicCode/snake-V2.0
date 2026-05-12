export class Snake{




constructor(posX,posY,snakeWidth,snakeHeight){

 this.style="green";   
this.snakeWidth=snakeWidth;
this.snakeHeight=snakeHeight;

this.posX=posX;
this.posY=posY;



}


drawSnake(contextGraphique){

contextGraphique.fillStyle=this.style;
contextGraphique.fillRect(this.posX,this.posY,this.snakeWidth,this.snakeHeight);
contextGraphique.stroke();
// ctx.fillStyle , ctx.fillRect(posx , posy , width , height)



}







}










