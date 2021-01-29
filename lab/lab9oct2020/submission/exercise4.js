function findArrIndex(myArr,str) {
    if(!(Array.isArray(myArr)))
        return "Please pass first parameter as an array";
    if(typeof(str)==String){
        return "Please pass second variable as string";
    }
    var lengthArr=myArr.length;
    var position=-1;
    for(var i=0;i<lengthArr;i++){
        if(str===myArr[i]){
            position=i;
            break;
        }
            
    }
    return position;
  }
  var result=findArrIndex(["abc","edabit","yyy","xxx"],"yyy");
  console.log(result);
  result=findArrIndex(["a","g","y","z"],"z");
  console.log(result);
  result=findArrIndex(['egg','bacon','toast','coffee','random','juice'],'coffee');
  console.log(result);
  result=findArrIndex(['egg','bacon','toast','coffee','random','juice'],'mcmuffin');
  console.log(result);
  var result=findArrIndex("not array","5");
    console.log(result);