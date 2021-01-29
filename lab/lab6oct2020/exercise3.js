function starWarsRelations(characterName) {
    switch(characterName){
        case "Darth Vader":
            var relation="Luke, I am your father.";
            break;
        case "Leia":
            var relation="Luke, I am your sister.";
            break;
        case "R2D2":
            var relation="Luke, I am your droid.";
            break;
        default:
            var relation="Luke, you dont know me.";
    }
    return relation;
}
var relation=starWarsRelations("Darth Vader");
console.log(relation);
var relation=starWarsRelations("Leia");
console.log(relation);
var relation=starWarsRelations("R2D2");
console.log(relation);