export class Food{
  
  
  constructor(graphic,snakePos){
    
    this.graphic=graphic;
    this.foodWidth=20;
    this.foodHeight=20;
    this.foodPosX=0;
    this.foodPosY=0;
    this.snakePos=snakePos;
    this.toGenerateRandomPos();
    
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
 


  
  this.foodPosX=rndX;
  this.foodPosY=rndY;
  
  
    
  }
  
  
  
  drawFood(){
    
  this.graphic.ctx.fillStyle="white";
   this.graphic.ctx.fillRect(this.foodPosX,this.foodPosY,this.foodWidth,this.foodHeight);
    
    
  }
  
  
  
  
  
  
  
  
  
}




