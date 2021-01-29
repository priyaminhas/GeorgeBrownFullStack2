function hasFriday13(month,Year){
    const dateObj= new Date(Year,month-1,13);
    var dayOfThirteen=dateObj.getDay();
    if(dayOfThirteen==5){
        console.log("It's Friday the 13th!");
    }
    else{
        console.log("Crystal Lake");
    }
    
}
hasFriday13(3,2020);
hasFriday13(10,2017);
hasFriday13(1,1985);