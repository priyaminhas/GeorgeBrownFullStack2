function getKeyValuePairs(objVar){
    var finalArray=[Object.keys(objVar),Object.values(objVar)];
    console.log(finalArray);
}
let objectOne={
    a:5,
    b:10,
    c:16
};
getKeyValuePairs(objectOne);
let objectTwo={
    r:"React",
    a:"Angular",
    v:"Vue"
};
getKeyValuePairs(objectTwo);
let objectThree={
    k1:true,
    k2:false,
    k3:undefined
};
getKeyValuePairs(objectThree);