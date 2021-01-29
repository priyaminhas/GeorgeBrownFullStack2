function findingNemo(word) {  
    word=word.replace(/[^a-zA-Z ]/g, "");
    var wordArr=word.split(" ");
    if(wordArr.indexOf("Nemo")>=0)
    {
        var positionNemo=wordArr.indexOf("Nemo");
        console.log("I found Nemo at "+(parseInt(positionNemo)+1));
    }
    else{
        console.log("I can't find Nemo :(");
    }
    
}
findingNemo("I am finding Nemo!");
findingNemo("Nemo is me");
findingNemo("I Nemo am");
findingNemo("Finding Dory");