function helloWorlds (num) {
    if(isNaN(num) || (typeof num === "boolean") || num==null){
        console.log("Goodbye World");
    }
    else{       
        for(var i=0;i<num;i++)
            console.log("Hello World!");
    }
}
helloWorlds(5);
helloWorlds(true); 
helloWorlds("hello"); 
helloWorlds(null); 
helloWorlds(undefined); 