function hasNumber(myArr,num){
    if(!(Array.isArray(myArr)))
        return "Please pass first parameter as an array";
    if(isNaN(num))
        return "Please pass second parameter as a number";
    var lengthArr=myArr.length;
    for(var i=0;i<lengthArr;i++){
        if(num===myArr[i])
            return true;
    }
    return false;
}
var result=hasNumber([1,2,3,4,5],3);
console.log(result);
var result=hasNumber([1,1,2,1,1],3);
console.log(result);
var result=hasNumber([5,5,5,6],5);
console.log(result);
var result=hasNumber([],5);
console.log(result);
var result=hasNumber("not array",5);
console.log(result);