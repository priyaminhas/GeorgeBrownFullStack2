function product(name,price){
    const obj = {};
    obj.name  = name;
    obj.price = price;
    obj.getInfo = function () {
        console.log("The item: "+obj.name+" costs:"+obj.price);
      }
    return obj;
}
var apples=product("apples",25);
apples.getInfo();

var soda=product("soda",2);
soda.getInfo();