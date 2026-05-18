

export class Graphics{


constructor(){

this.cnv=document.getElementById("game");
this.ctx=this.cnv.getContext("2d");
this.windowWidth="300";
this.windowHeight="300";
this.displayGps=document.getElementById("gps");


}


toCreateGrid(){
let sizeCase=20;
let nbCases=20;


    for(let x=0;x<nbCases;x++){
      for(let y=0;y<nbCases;y++){ 
       
        
        this.ctx.strokeStyle="grey";
        this.ctx.strokeRect(sizeCase * x,sizeCase*y ,sizeCase,sizeCase);
        
        
      }     
    }
    
    


}


toDisplay(localise){
  
  this.displayGps.innerHTML=localise;
  
  
}




}






