

export class Game{


    constructor(getPosSnake ,getPosFood){

        this.getPosSnake=getPosSnake;
        this.getPosFood=getPosFood;
        this.collisions=false;
        this.pointReachesAtTen=false;
        this.point=0;
        this.grow=false;
this.interval=0;
    this.btnReplay=document.getElementById("btnReplay");



    }



 toCountPoints(collis , specCollis){



if(collis){

this.point+=10;

}else if(specCollis){
    this.point+=50;
}


 

// }


//this.thereIsFoodColision=true;

return `vous avez ${this.point} : points`;
}



selfCollisions(head,queue,bodySn,loop){

// compare body snake avec la tete qui est le dernier ele du tableau


let rslt=bodySn.some((n,i) =>{ 

    console.log(
        i,"le x",
        n.x, "le y",
        n.y,
        head.x,
        head.y,
         n.x === head.x && n.y === head.y
        
    );




return i !== bodySn.length-1 && n.x === bodySn[bodySn.length-1].x&& n.y === bodySn[bodySn.length-1].y





});
 console.log(rslt);
  
// if true there is a body snake equal to head and game over
if(rslt){
// this.gameIsOver(loop);


}


  if(head.x === queue.x && head.y === queue.y){
    

 clearInterval(loop);
    this.btnReplay.innerText="GAME-OVER do you want to replay?"

    let btn=document.createElement("button");
    this.btnReplay.appendChild(btn);
   

    btn.innerHTML="continue";
   
    btn.addEventListener("click", () =>{
       
     document.location.reload();
   
        
    })




// this.gameIsOver(loop);
    
    
    
    
}

  

    



  







}


    gameIsOver(){

   


    }





}

