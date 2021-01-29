function findFacts(cityObj){
    var message=cityObj.name+" has a population of "+cityObj.population+" and is located in "+cityObj.continent;
    console.log(message);
}
var cityObj={
    name: "Toronto",
    population:"6,197,000",
    continent:"North America"
};
findFacts(cityObj);
var cityObj1={
    name: "Venice",
    population:"261,905",
    continent:"Europe"
};
findFacts(cityObj1);
