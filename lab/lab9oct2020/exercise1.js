function buildArray(num) {
    var myArray=new Array();
    for(var i=0;i<num;i++){
        myArray[i]=i;
    }
    return myArray;
}
var result=buildArray(2);
console.log(result);
var result=buildArray(25);
console.log(result);