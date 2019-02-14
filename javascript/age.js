function grade(score){
    if(score >=75 && score <=100){
        return "A1"
    }
    else if(score >= 65 && score <= 74){
     return "B2"
    }
    else if(score >= 55 && score <= 64){
        return "B3"
       }
       else if(score >= 50 && score <= 54){
        return "C4"
       }
       else if(score >= 45 && score <= 49){
        return "d5"
       }
       else if(score >= 40 && score <= 44){
        return "e8"
       }
       else if(score >= 0 && score <= 39){
        return "f9"
       }
       else{
           return "invalid"
       }
}