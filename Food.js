export class Food{
  
  
  constructor(graphic,snakePos){
    
    this.graphic=graphic;
    this.foodWidth=20;
    this.foodHeight=20;
    this.foodColor="white";
    this.specialFoodColor="purple";
    this.foodPosX=0;
    this.foodPosY=0;
this.specialFoodPosX=0;
this.specialFoodPosY=0;

    this.snakePos=snakePos;
    this.thereIsFoodCollision;
    this.thereIsSpecialFoodCollision;
    this.toGenerateRandomPos();
    //this.foodColision();
    
  }
  
  toGenerateRandomPos(indx,indx2,indx3,indx4,rndY,rndX,rndX2,rndY2,rndTab=[]){
 
for(let i=0;i<400;i+=20){
  
  rndTab.push(i);
  indx=Math.floor(Math.random()*rndTab.length);
  indx2=Math.floor(Math.random()*rndTab.length);


indx3 = Math.floor(Math.random() * rndTab.length);
indx4 = Math.floor(Math.random() * rndTab.length);
  
}

//retire un chiffre du tableau 
 rndX=rndTab.splice(indx,1);
 rndY=rndTab.splice(indx2,1);
 
 
rndX2=rndTab.splice(indx3,1);
 rndY2=rndTab.splice(indx4,1);
 

  //classic food
  this.foodPosX=Number(rndX);
  this.foodPosY=Number(rndY);
  
  //Special food
  this.specialFoodPosX = Number(rndX2);
this.specialFoodPosY = Number(rndY2);
  
  
  
    
  }
  
  
  
  drawFood(points){
    
  this.graphic.ctx.fillStyle=this.foodColor;
   this.graphic.ctx.fillRect(this.foodPosX,this.foodPosY,this.foodWidth,this.foodHeight);
   
   this.graphic.ctx.fill();
   
   

    if(points % 100 === 0 && points!==0 ){

//this.graphic.ctx.fillRect(this.specialFoodPosX,this.specialFoodPosY,20,20);

this.graphic.ctx.fillStyle =this.specialFoodColor;
this.graphic.ctx.fillRect(this.specialFoodPosX,this.specialFoodPosY,20,20);

this.graphic.ctx.stroke();


     // this.foodColor="white";
      
    }
    
    
    
  
  }
  
  
  foodColision(){
    
    
this.snakePos.posX==this.foodPosX&&this.snakePos.posY==this.foodPosY?(this.toGenerateRandomPos(),this.thereIsFoodCollision=true) :this.thereIsFoodCollision=false;


// special food collision
this.snakePos.posX==this.specialFoodPosX&&this.snakePos.posY==this.specialFoodPosY?(this.toGenerateRandomPos(),this.thereIsSpecialFoodCollision=true):this.thereIsSpecialFoodCollision=false;

  // console.log("?? :", this.thereIsFoodCollision)

  return this.thereIsFoodCollision;
  }
  


/*specialFood(points){

console.log("p :",points)




}else{
  this.foodColor="white";
}


}*/


  
}




