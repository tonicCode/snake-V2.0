
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
      
    }else if(this.posX<0){
      this.posX=400;
    }


// down direction

    if(this.keyDownIsPushed){
if(this.posY<400){

this.dx=0;
this.dy=20;
this.posY+=this.dy;

}else{
  this.posY=0;
}

}else if(this.keyUpIsPushed){
  
  this.dx=0;
  this.dy=-20;
  this.posY+=this.dy;

  
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
  //this.posX+=this.dx;




}


    
   //requestAnimationFrame(this.toMove);
  }
  
  
  
  
//controle mobile 
mobileControl(){

this.btnDown.addEventListener("touchstart",()=>{
  
  this.toPush("on","bDown");
  
  
  
  
  
});


this.btnDown.addEventListener("touchend",()=>{
  
  this.toPush("off","bDown");
  
});


this.btnLeft.addEventListener("touchstart", () => {
  
  this.toPush("on","bLeft");
  
});


this.btnLeft.addEventListener("touchend", () => {
  
  this.toPush("off","bLeft");
  
});




this.btnRight.addEventListener("touchstart", () => {
  
  this.toPush("on","bRight");
  
});


this.btnRight.addEventListener("touchend", () => {
  
  this.toPush("off","bRight");
  
});



this.btnUp.addEventListener("touchstart", () => {
  
  this.toPush("on","bUp");
  
});


this.btnUp.addEventListener("touchend", () => {
  
  this.toPush("off","bUp");
  
});












}


toPush(togle,bName){
  console.log(bName);
  
  if(bName == "bDown"){
  
  switch(togle){
    

    
    
    case "on":this.keyDownIsPushed=true;
    this.keyUpIsPushed=true;
   
     break;
    
    case "off": 
      //this.keyLeftIsPushedIsPushed =false;
   // this.keyLeftIsPushed=false;
    break;
    
  }
    
    
  }else if(bName == "bLeft"){
    
    switch (togle) {
  
  
  case "on":
    this.keyLeftIsPushed=true;
    this.keyDownIsPushed=false;
    break;
  case "off":
   this.keyLeftIsPushed=false;
    break;
    
    
  }
  
  
  } else if(bName == "bRight"){
    
    switch (togle) {
  
  
  case "on":
    this.keyRightIsPushed=true;
    this.keyDownIsPushed=false;
    break;
  case "off":
   this.keyRightIsPushed=false;
    break;
    }
    
  }else if(bName=="bUp"){
    
    switch (togle) {
  
  
  case "on":
    this.keyUpIsPushed=true;
    this.keyDownIsPushed=false;
    break;
  case "off":
   this.keyUpIsPushed=false;
    break;
    
    
  }
  
   
  }
    
    
  
  
  
  
  
  
}





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






