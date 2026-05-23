

export class Game{


    constructor(getPosSnake ,getPosFood){

        this.getPosSnake=getPosSnake;
        this.getPosFood=getPosFood;
        this.collisions=false;
        this.pointReachesAtTen=false;
        this.point=0;
        this.grow=false;

        //this.toGetCollisions();

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


 

// toSendSpecialFood(arriveADix){



// return arriveADix;
// }


}








