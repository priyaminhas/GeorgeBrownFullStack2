function speakHacker(str){
    var strArr=str.split("");
    var lengthArr=strArr.length;
    var newArr=new Array();
    for(var i=0;i<lengthArr;i++)
    {
        if(strArr[i]=="a")
        {
            newArr.push("4");
        }
        else if(strArr[i]=="e")
        {
            newArr.push("3");
        }
        else if(strArr[i]=="o")
        {
            newArr.push("0");
        }
        else if(strArr[i]=="s")
        {
            newArr.push("5");
        }
        else{
            newArr.push(strArr[i]);
        }
        
    }
    var newString=newArr.join("");
    return newString;
}
var result=speakHacker("Long Weekend!");
console.log(result);
var result=speakHacker("matrix4 is coming out");
console.log(result);
var result=speakHacker("marvel movies are delayed");
console.log(result);