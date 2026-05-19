

export class Game{


    constructor(getPosSnake ,getPosFood){

        this.getPosSnake=getPosSnake;
        this.getPosFood=getPosFood;
        this.collisions=false;
        this.pointReachesAtTen=false;
        this.point=0;

        //this.toGetCollisions();

    }



 toCountPoints(collis){



if(collis){

this.point+=1;
  
}

// if(this.point % 10 == 0){
//    this.pointReachesAtTen=true;


// }


//this.thereIsFoodColision=true;

return `vous avez ${this.point} : points`;
}


 

// toSendSpecialFood(arriveADix){



// return arriveADix;
// }


}








