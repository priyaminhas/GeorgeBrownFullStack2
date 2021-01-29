
function emptyArray(myArray){
    if(!(Array.isArray(myArray)))
        return "Please pass first parameter as an array";
    var lengthArr=myArray.length;
    for(var i=0;i<lengthArr;i++ )
        myArray.pop();
    return myArray;
}
var firstArr=[1,2,3];
var result=emptyArray(firstArr);
console.log(result);

var secondArr=['egg','bacon','toast','coffee','random','juice'];
result=emptyArray(secondArr);
console.log(result);