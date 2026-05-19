

export class Game{


    constructor(getPosSnake ,getPosFood){

        this.getPosSnake=getPosSnake;
        this.getPosFood=getPosFood;
        this.collisions=false;
        this.point=0;

        //this.toGetCollisions();

    }



 toCountPoints(collis){



if(collis){

this.point+=1;
  
}




//this.thereIsFoodColision=true;

return `vous avez ${this.point} : points`;
}


 




}








