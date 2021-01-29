function halloween(dateObj) {
    var dateVal=dateObj.getDate();
    var monthVal=dateObj.getMonth();
    if(dateVal==31 && monthVal==9){
        console.log("Happy Halloween!!");
    }
    else{
        console.log("Just another day!");
    }
}
halloween(new Date("2013/10/31"));
halloween(new Date("2017/07/31"));
halloween(new Date("2011/10/12"));