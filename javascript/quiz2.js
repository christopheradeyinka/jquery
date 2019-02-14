function ore(){
    eunice=[];
    for(i =0;i < 10 ;i++){
        eunice.push(prompt("enter a number"));
    }
    var biggest =eunice[0]
    for(i= 1; i < 9; i++){
        if(biggest <eunice [i]){
            biggest =eunice[i]
        }
    }
    console.log(biggest + "is the greatest number")
}
ore();