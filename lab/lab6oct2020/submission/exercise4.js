function findCase(caseVar) {
    const upperCase=caseVar.toUpperCase();
    const lowerCase=caseVar.toLowerCase();
    if(upperCase==caseVar){
        console.log("upper");
    }
    else if(lowerCase==caseVar){
        console.log("lower");
    }
    else{
        console.log("mixed");
    }
}
findCase("whisper...");
findCase("SHOUT!");
findCase("Quiet Voice");