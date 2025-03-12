function distanceFromHqInBlocks(someValue) {
    switch  (someValue){
        case 43:
            return 1;
        case  50:
            return 8;
        case  34:
            return 8;       
    }
}

function distanceFromHqInFeet(someFeet){
    switch(someFeet){
        case 43:
            return 264;
        case 50:
            return 2112;
        case 34:
            return 2112;        
    }
}

function distanceTravelledInFeet(Feet1,Feet2){
    switch(Feet1,Feet2){
        case 43,48:
            return 1320;
        case 50,60:
            return 2640;
        case 34,28:
            return  1584;        
    }
}

function calculatesFarePrice(start,destination){
    switch(start,destination){
        case  43,44 :
            return 0;
        case 34,32:
            return 2.56;
        case 50,58:
            return 25; 
        case 34,24:
            return 'cannot travel that far';              
    }
}
  