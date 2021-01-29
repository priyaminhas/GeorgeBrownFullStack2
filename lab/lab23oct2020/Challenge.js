var array = [1,2,3,4];
var calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
var calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(calculateSum);
console.log(calculateProduct);