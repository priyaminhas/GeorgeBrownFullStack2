function reverseIt(myArr){
    if(!(Array.isArray(myArr)))
        return "Please pass first parameter as an array";
    var reverseArr=new Array();
    var lengthArr=myArr.length;
    if(lengthArr){
        for(var i=lengthArr-1;i>=0;i--){
            reverseArr.push(myArr[i]);
        }
    }
    
    return reverseArr;
}
var result=reverseIt([1,2,3,4]);
console.log(result);
var result=reverseIt([9,9,2,3,4]);
console.log(result);
var result=reverseIt([]);
console.log(result);