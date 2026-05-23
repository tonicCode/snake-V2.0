export class Snake{




constructor(deplacement){

 this.style="green"; 
 this.growStyle="red";  
this.snakeWidth=20;
this.snakeHeight=20;
this.snakePosX=0;
this.snakePosY=0;


this.snakeBody=[{x:20,y:40} ,{x:40,y:40},{x:60,y:40}];
//this.snakeHead={x:0,y:0};




this.snakeMoltPosX=60;
this.snakeMoltPosY=40;

//this.growHorizon=true;
this.snakeIsGrowing=false;
this.queueSizeH=0;
this.queueSizeV=0;
this.snakeSizeH=0;
this.snakeSizeV=0;

this.deplacement=deplacement;
this.intervalId;


}


drawSnake(contextGraphique,cnv){
contextGraphique.clearRect(0,0,cnv.width,cnv.height);

//draw the head 
contextGraphique.fillStyle=this.style;

this.snakeBody.forEach(obj =>{

contextGraphique.fillRect(obj.x,obj.y,this.snakeWidth,this.snakeHeight);

});





// draw the queue

/*contextGraphique.save();
contextGraphique.fillStyle=this.growStyle;
//contextGraphique.globalAlpha=0.3;
contextGraphique.fillRect(this.snakeHead.x,this.snakeHead.y,20,20);
contextGraphique.restore();

contextGraphique.fill();*/




}


/* update(){
 
 //change the head position

if(this.deplacement.headRight){
 //posx
//this.snakeMoltPosX=(this.deplacement.posX) - this.snakeWidth;

//this.snakeHead={x:this.snakeBody[0].x, y:this.snakeBody[0].y - 20}


//this.snakeBody.unshift(this.snakeHead);
//this.snakeBody.pop();
//posY mue
//this.snakeMoltPosY=this.deplacement.posY;

}else if(this.deplacement.headLeft){

this.snakeHead={x:this.snakeBody[0].x - 20,
 
 y:this.snakeBody[0].y };

this.snakeBody.unshift(this.snakeHead);
this.snakeBody.pop();

/*this.snakeMoltPosX=(this.deplacement.posX) + this.snakeWidth;
this.snakeMoltPosY=this.deplacement.posY;

}else if(this.deplacement.headDown){


/*this.snakeMoltPosX=this.deplacement.posX;
this.snakeMoltPosY=(this.deplacement.posY) - this.snakeHeight;

this.snakeHead={x:this.snakeBody[0].x,
 y:this.snakeBody[0].y + 20};


this.snakeBody.unshift(this.snakeHead);
this.snakeBody.pop();


}else if(this.deplacement.headUp){
/*this.snakeMoltPosX=this.deplacement.posX;
this.snakeMoltPosY= (this.deplacement.posY) + this.snakeHeight;

this.snakeHead={x:this.snakeBody[0].x ,
 
 y:this.snakeBody[0].y- 20
 
}

this.snakeBody.unshift(this.snakeHead);
this.snakeBody.pop();





} 


 
 
} */




getLocalise(){
 
 this.snakePosX=this.deplacement.posX;
 this.snakePosY=this.deplacement.posY;
//console.log("gps :" , this.snakePosX);

 return `le snake ce trouve ${this.snakePosX} en x et ${this.snakePosY} en Y  `
}



// grandir snake 

toGrow(grow){

if(grow){
// this.snakeIsGrowing=true;
  this.snakeIsGrowing=true;

}else{
  this.snakeIsGrowing=false;
 
}


//console.log("gr" ,grow);

/*if(grow&&this.deplacement.headRight){
 
 this.queueSizeH+=20;
 this.queueSizeV=0;
}else if(grow&&this.deplacement.headDown){
 
 this.queueSizeH=0;
 this.queueSizeV+=20;
 this.snakeSizeV=this.snakeSizeH;
 
 
}*/

//if(eatPoints%5 ===0){
// this.snakeWidth+=this.snakeWidth;
//}

//return this.snakeWidth;
// horizontal pousse à l arriere 

//vertical donc quand appuis vers le bas ou haut pousse

// definir la tete par exemple de couleur rouge ou la queue de maniere rouge transparente 
// quand elle pousse moins opaque

}









}










