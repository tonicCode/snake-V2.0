export class Snake{




constructor(deplacement){

 this.style="green";   
this.snakeWidth=20;
this.snakeHeight=20;

this.deplacement=deplacement;
this.intervalId;


}


drawSnake(contextGraphique,cnv){
contextGraphique.clearRect(0,0,cnv.width,cnv.height);

contextGraphique.fillStyle=this.style;



contextGraphique.fillRect(this.deplacement.posX,this.deplacement.posY,this.snakeWidth,this.snakeHeight);
contextGraphique.stroke();

//console.log(cnv.height);


// ctx.fillStyle , ctx.fillRect(posx , posy , width , height)



}






}










