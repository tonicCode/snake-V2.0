export class Food{
  
  
  constructor(graphic,snakePos){
    
    this.graphic=graphic;
    this.foodWidth=20;
    this.foodHeight=20;
    this.foodColor="white";
    this.foodPosX=0;
    this.foodPosY=0;
    this.snakePos=snakePos;
    this.thereIsFoodCollision;
    this.toGenerateRandomPos();
    //this.foodColision();
    
  }
  
  toGenerateRandomPos(indx,indx2,rndY,rndX,rndTab=[]){
 
for(let i=0;i<400;i+=20){
  
  rndTab.push(i);
  indx=Math.floor(Math.random()*rndTab.length);
  indx2=Math.floor(Math.random()*rndTab.length);

  
}

//retire un chiffre du tableau 
 rndX=rndTab.splice(indx,1);
 rndY=rndTab.splice(indx2,1);
 


  
  this.foodPosX=Number(rndX);
  this.foodPosY=Number(rndY);
  
  
    
  }
  
  
  
  drawFood(){
    
  this.graphic.ctx.fillStyle=this.foodColor;
   this.graphic.ctx.fillRect(this.foodPosX,this.foodPosY,this.foodWidth,this.foodHeight);
    
  
  }
  
  
  foodColision(){
    
    
this.snakePos.posX==this.foodPosX&&this.snakePos.posY==this.foodPosY?(this.toGenerateRandomPos(),this.thereIsFoodCollision=true) :this.thereIsFoodCollision=false;


  // console.log("?? :", this.thereIsFoodCollision)

  return this.thereIsFoodCollision;
  }
  


specialFood(points){

console.log("p :",points)


if(points % 10 === 0 && points!==0 ){



 
this.foodColor="red";
//  this.graphic.ctx.fill();


}else{
  this.foodColor="white";
}


}


  
}




