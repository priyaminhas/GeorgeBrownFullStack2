function difference(number){
    let result;
    if(number>13){
         result=(number-13)*2;        
    }
    else{
        result=13-number;
    }
    return result;
}
console.log(difference(32));
console.log(difference(11));