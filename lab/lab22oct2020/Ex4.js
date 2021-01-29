function Car(obj){
    this.brand=obj.brand;
    this.model=obj.model;
    this.getBrand = function(){
        console.log("This manufacturer is:"+this.brand);
    }
    this.getModel = function(){
        console.log("This model is:"+this.model);
    }
}

var tesla = new Car({brand:"Tesla",model:"S"});
tesla.getBrand();
tesla.getModel();

var camaro = new Car({brand:"Chevy",model:"Camaro"});
camaro.getBrand();
camaro.getModel();