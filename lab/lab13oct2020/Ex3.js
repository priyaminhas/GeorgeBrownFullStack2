function displayAlert(){
    window.alert("Hello am an alert box!");
}
function displayPrompt(){
    window.prompt("Hi, this is a prompt box");
}
function displayConfirm(){
    var confirmAns=window.confirm("Do you really want to close the browser?");
    if(confirmAns)
        window.close();
}