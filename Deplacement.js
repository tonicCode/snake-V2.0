
export class Deplacement{
  
  
  constructor(){
    
    this.dx=20;
    this.dy;
    this.posX=0;
    this.posY=0;
   
   
   
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
    
   //requestAnimationFrame(this.toMove);
  }
  
  
  
  
//controle mobile 


  
  
  
  
  
  
}






