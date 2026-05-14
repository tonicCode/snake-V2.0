
export class Deplacement{
  
  
  constructor(){
    
    this.dx=20;
    this.dy=20;
    this.posX=0;
    this.posY=0;
    this.keyDownIsPushed=false;
    this.keyUpIsPushed=false;
    this.keyLeftIsPushed=false;
    this.keyRightIsPushed=false;
    this.pcControlEvent();
   
   
   
   this.interval=setInterval(() =>{
     
     this.toMove();
     //this.snake;
     
   
     
   },100);
   
    
    
  }
  
  toMove(){
    
   // console.log(this.posX);
   this.posX+=this.dx;
    
    if(this.posX>400){
      this.posX=0;
      
    }


// down direction

    if(this.keyDownIsPushed){
if(this.posY<400){

this.dx=0;
this.posY+=this.dy;

}else{
  this.posY=0;
}

}


if(this.keyRightIsPushed){

  this.dy=0;
  this.dx=20;
this.posX++;

}

if(this.keyLeftIsPushed){

  this.dx=-this.dx;
  this.posX+=this.dx;

}


    
   //requestAnimationFrame(this.toMove);
  }
  
  
  
  
//controle mobile 


  // controle pc 
  pcControlEvent(){

  document.addEventListener("keydown", (e) => {

this.toPushdown(e);

});



document.addEventListener('keyup', (e) => {

this.toPushUp(e);


});


  
}


toPushdown(e){  
  // console.log("key push :", e.key);

switch(e.key){


case 'ArrowDown': this.keyDownIsPushed=true;
  break;
  case 'ArrowLeft': this.keyLeftIsPushed=true;
  break;
  case 'ArrowUp': this.keyUpIsPushed=true;
  break;
case 'ArrowRight': this.keyRightIsPushed=true;
  break;

}


  
}



toPushUp(e){

  // console.log("up",e);

switch(e.key){

case 'ArrowDown':this.keyUpIsPushed=false;
break;
 case 'ArrowLeft': this.keyLeftIsPushed=false;
  break;
  case 'ArrowUp': this.keyDownIsPushed=false;
  break;
case 'ArrowRight': this.keyLeftIsPushed=false;
  break;


}


}






}






