export class Snake{




constructor(deplacement){

 this.style="green"; 
 this.growStyle="red";  
this.snakeWidth=20;
this.snakeHeight=20;
this.snakePosX=0;
this.snakePosY=0;

this.snakeMoltPosX=0;
this.snakeMoltPosY=0;


this.deplacement=deplacement;
this.intervalId;


}


drawSnake(contextGraphique,cnv){
contextGraphique.clearRect(0,0,cnv.width,cnv.height);

//draw the head 
contextGraphique.fillStyle=this.style;
contextGraphique.fillRect(this.deplacement.posX,this.deplacement.posY,this.snakeWidth,this.snakeHeight);


//change the head position

if(this.deplacement.headRight){
this.snakeMoltPosX=(this.deplacement.posX) - this.snakeWidth;
this.snakeMoltPosY=this.deplacement.posY;

}else if(this.deplacement.headLeft){
this.snakeMoltPosX=(this.deplacement.posX) + this.snakeWidth;
this.snakeMoltPosY=this.deplacement.posY;

}else if(this.deplacement.headDown){
this.snakeMoltPosX=this.deplacement.posX;
this.snakeMoltPosY=(this.deplacement.posY) - this.snakeHeight;

}else if(this.deplacement.headUp){
this.snakeMoltPosX=this.deplacement.posX;
this.snakeMoltPosY= (this.deplacement.posY) + this.snakeHeight;
}


// draw the queue
contextGraphique.save();
contextGraphique.fillStyle=this.growStyle;
contextGraphique.globalAlpha=0.3;
contextGraphique.fillRect(this.snakeMoltPosX,this.snakeMoltPosY,20,20);
contextGraphique.restore();

contextGraphique.stroke();




}


getLocalise(){
 
 this.snakePosX=this.deplacement.posX;
 this.snakePosY=this.deplacement.posY;
//console.log("gps :" , this.snakePosX);

 return `le snake ce trouve ${this.snakePosX} en x et ${this.snakePosY} en Y  `
}



// grandir snake 

toGrow(){






// horizontal pousse à l arriere 

//vertical donc quand appuis vers le bas ou haut pousse

// definir la tete par exemple de couleur rouge ou la queue de maniere rouge transparente 
// quand elle pousse moins opaque


}









}










