function startClock(){
    var i=0;
    do {
        const dateNow=new Date();
        console.log(dateNow);
        i++;
        if(i==10){
            var promptAns=window.confirm("Do you want to stop the clock?");
            if(!promptAns){
                i=0;
            }
        }
    } while (i<10);
}
startClock();