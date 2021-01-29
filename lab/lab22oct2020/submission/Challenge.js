function hasFreeShipping(obj){
    var valArr=Object.values(obj);
    let sum=valArr.reduce((a, b) => a + b, 0);
    if(sum>50)
        console.log("true");
    else    
        console.log("false");
  
}
hasFreeShipping({"Masks":5.99,"HDMI Cable":15.99});
hasFreeShipping({"XBOX Series X":599.99});
hasFreeShipping({"Cards":5.99,"Books":25.99,"Yoga Mat":20.00});