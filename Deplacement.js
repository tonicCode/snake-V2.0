
export class Deplacement{
  
  
  constructor(){
    
    this.dx=20;
    this.dy=20;
    this.posX=0;
    this.posY=0;
    
    this.btnDown=document.getElementById("idown");
    this.btnUp=document.getElementById("ihigh");
    this.btnLeft=document.getElementById("ileft");
    this.btnRight=document.getElementById("iright");
    this.mobileControl();
    
    
    this.snakeIsRunning=false;
    this.snakeMoveForwardVertically=false;
    this.snakeMoveBackVertically=false;
    
    
    this.snakeMoveForwardHorizontally=true;
    this.snakeMoveBackHorizontally=false;
    
    this.direction="right";
    
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
    this.keyLeftIsPushed=false;
    this.keyRightIsPushed=false;
    this.pcControlEvent();
    this.autorisation;
    
  
   
  //  this.interval=setInterval(() =>{
     
  //    this.toMove();
     


   
   
     
  //  },100);
   
    
    
  }
  
  
  
  toMove(){
    
   // 
  // this.getPosX();
   
   
  //console.log("direct :", this.direction); 
   
   
   if(this.direction=="right"){
   this.posX+=this.dx;
  
   }
    
    
    if(this.posX>380){
      this.posX=0;
      
    }else if(this.posX<0){
      this.posX=400;
    }


// down direction


if(this.keyDownIsPushed){
if(this.posY<380){

this.dx=0;
this.dy=20;
this.posY+=this.dy;


}else{
 this.posY=0;
  
  
}


}

if(this.keyUpIsPushed){
  
  
  if(this.posY>=0){
  this.dx=0;
  this.dy=-20;
  this.posY+=this.dy;
}else{

  this.posY=400;
}
  
}





if(this.keyRightIsPushed){

  this.dy=0;
  this.dx=20;
//this.posX++;

}

if(this.keyLeftIsPushed){

this.dy=0;
this.dx=-20;
  //this.dx=-this.dx;
  this.posX+=this.dx;




}




  }
  
  
  
  
//controle mobile 
mobileControl(){

this.btnDown.addEventListener("touchstart",()=>{
  
  this.toPush("on","down","up");
  
  
  
  
  
});


this.btnDown.addEventListener("touchend",()=>{
  
  this.toPush("off","down");
  
});


this.btnLeft.addEventListener("touchstart", () => {
  
  this.toPush("on","left","right");
  
});


this.btnLeft.addEventListener("touchend", () => {
  
  this.toPush("off","left");
  
});




this.btnRight.addEventListener("touchstart", () => {
  
  this.toPush("on","right","left");
  
});


this.btnRight.addEventListener("touchend", () => {
  
  this.toPush("off","right");
  
});



this.btnUp.addEventListener("touchstart", () => {
  
  this.toPush("on","up","down");
  
});


this.btnUp.addEventListener("touchend", () => {
  
  this.toPush("off","up");
  
});












}


toPush(togle,bName,nonAutoriser){
  console.log(bName);
  
  if(bName == "down" && bName!=="up"&&nonAutoriser!==this.direction){
  
  switch(togle){
    

    
    
    case "on":this.keyDownIsPushed=true;
  this.direction=bName;
  this.keyLeftIsPushed=false;
  
  
  

    
     break;
    
    case "off": 
      
  
  
  
    break;
    
  }
    
    
  }else if(bName == "left"&&nonAutoriser!==this.direction ){
    
    switch (togle) {
  
  
  case "on":
    this.keyLeftIsPushed=true;
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
    this.direction=bName;
   
    
    break;
  case "off":
  
  
  
  
    break;
    
    
  }
  
  
  } else if(bName == "right"&& nonAutoriser!==this.direction){
    
    switch (togle) {
  
  
  case "on":
    
    this.keyRightIsPushed=true;
    this.direction=bName;
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
  
    
    
    break;
  case "off":
 
 
    break;
    }
    
  }else if(bName=="up" &&nonAutoriser!==this.direction){
    
    switch (togle) {
  
  
  case "on":
   this.keyUpIsPushed=true;
   this.direction=bName;
   this.keyLeftIsPushed=false;
   
   
  
    
    break;
  case "off":
 
  
    break;
    
    
  }
  
   
  }
    
  
  
}





  // controle pc 
  pcControlEvent(){

  document.addEventListener("keydown", (e,nonAutoriser) => {

    e.key == "ArrowDown"?nonAutoriser='up':e.key=="ArrowLeft"?nonAutoriser='right':e.key=="ArrowRight"?nonAutoriser="left":e.key=="ArrowUp"?nonAutoriser="down":"";

this.toPushdown(e,nonAutoriser);

});



document.addEventListener('keyup', (e) => {

this.toPushUp(e);


});


  
}


toPushdown(e,nonAutoriser){  
  

switch(e.key){

  

case 'ArrowDown': 

 


if(nonAutoriser!==this.direction){
this.direction="down";
this.keyDownIsPushed=true;
 // this.direction=bName;
  this.keyLeftIsPushed=false;
}

  break;
  
  case 'ArrowLeft': 


  
  if(nonAutoriser!==this.direction){
    this.direction="left";
  this.keyLeftIsPushed=true;

  
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
  


  }
  break;
  case 'ArrowUp': 



if(nonAutoriser!==this.direction){
  this.direction="up";
  this.keyUpIsPushed=true;

   this.keyLeftIsPushed=false;
   
   


}
  break;
case 'ArrowRight': 



if(nonAutoriser!==this.direction){
this.direction="right";

  this.keyRightIsPushed=true;
    
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
  
}
  break;

}


  
}



toPushUp(e){

  

switch(e.key){

case 'ArrowDown'://this.keyUpIsPushed=false;
break;
 case 'ArrowLeft':// this.keyLeftIsPushed=false;
  break;
  case 'ArrowUp': //this.keyDownIsPushed=false;
  break;
case 'ArrowRight':// this.keyLeftIsPushed=false;
  break;


}


}


toGetPosX(){
  
  
  return this.posX;
}



}






