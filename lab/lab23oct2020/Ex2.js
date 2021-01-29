function gretter(myArray,counter){
    let greetText = 'Hello';
    myArray.map(function(element){
        console.log(`${greetText} ${element}`);
    });
}
gretter(['Randy Savage','Ric Flair','Hulk Hogan'],3);