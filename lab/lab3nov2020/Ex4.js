const arrayOfNames  =   ['jaxx','tiny','clay'];
const mixedArray    =   ['anarchy',99,true];

function makeUpperCase(arrayFinal){
    return new Promise((resolve, reject) => {
            if(arrayFinal.every(item => typeof item === 'string')){
                resolve(arrayFinal.map(item => item.toUpperCase()));
            } 
            else {
                reject(Error("Not all items in the array are strings!"));
            }
     });
}

function sortWords(arrayFinal){
    return arrayFinal.sort((a,b)   =>  {
        if(a>b){
            return 1;
        }
        else{
            return -1;
        }
    })
}


makeUpperCase(arrayOfNames).then(sortWords).then((result)   => console.log(result)).catch((error)   => console.log(error));
makeUpperCase(mixedArray).then(sortWords).then((result)   => console.log(result)).catch((error)   => console.log(error));