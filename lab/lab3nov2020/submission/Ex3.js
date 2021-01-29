function compareNumToTen(numOne){
    return new Promise((resolve, reject) => {
        if(numOne>10) {
           const successObject = {
              msg: numOne+' is greater than 10, Success!'
           }
           resolve(successObject); 
        } else {
           const errorObject = {
              msg: numOne+' is less than 10, Error!'
           }
           reject(errorObject);
        }
     });
}
compareNumToTen(20).then(result =>  console.log(result.msg)).catch(error => console.log(error.msg));
compareNumToTen(8).then(result =>  console.log(result.msg)).catch(error => console.log(error.msg));