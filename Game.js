

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

//bodySn.forEach(bodyPos => {
   
  
 
    //si tete touche segm compris entre index 0 et length
    let isTheBody=true;
    
    
    /*if(queue.x > 0 && head.x<bodySn.length){
        
      isTheBody=true;  
    //  console.log(isTheBody);
        
    }*/
    
    
  if(head.x === queue.x && head.y === queue.y){
    
    clearInterval(loop);
    this.btnReplay.innerText="GAME-OVER do you want to replay?"

    let btn=document.createElement("button");
    this.btnReplay.appendChild(btn);
   

    btn.innerHTML="continue";
   
    btn.addEventListener("click", () =>{
       
     document.location.reload();
   
        
    })
    
    
    
    
}

  
    
    
//});


  



//for(let i=0;i<partOfSnake.length;i++){

//let length=partOfSnake.length;

    // if(partOfSnake[0].x === partOfSnake[i].y  && partOfSnake[0].y && partOfSnake[i].x){
         
       //  console.log(partOfSnake);
         
    // }
     
     //  si obj existe de deja a la mm pos

   
//  if(partOfSnake[0].x === partOfSnake[length].x){
     // alert("ya self collis");
  //}
    
    
//}









}

}

