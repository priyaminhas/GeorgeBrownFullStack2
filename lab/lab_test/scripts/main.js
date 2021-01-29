var currentStartTime=new Date();
var currentEndTime=new Date();

window.addEventListener('load', () => {
    console.log('window loaded..');
});

const startTime=document.querySelector("#btnStart");

startTime.addEventListener('click', () => {
    currentStartTime = new Date();
    var seconds = currentStartTime.getSeconds();
    var minutes= currentStartTime.getMinutes();
    var hours= currentStartTime.getHours();
    var twelveHourFormat="";
    if(hours>=12)
        twelveHourFormat="PM";
    else   
        twelveHourFormat="AM";

    hours = hours % 12 || 12;

    var startTimeNow=hours+":"+ minutes +":"+ seconds +" "+ twelveHourFormat;
    var startInputBox=document.getElementById("txtStartTime");
    startInputBox.value=startTimeNow;
    console.log("start timer:"+startTimeNow);

    //clear the stop textbox and stop variable
    var endInputBox=document.getElementById("txtEndTime");
    endInputBox.value="";
    
});

const endTime=document.querySelector("#btnStop");
endTime.addEventListener('click', () => {
    currentEndTime = new Date();
    var seconds = currentEndTime.getSeconds();
    var minutes= currentEndTime.getMinutes();
    var hours= currentEndTime.getHours();

    var twelveHourFormat="";
    if(hours>=12)
        twelveHourFormat="PM";
    else   
        twelveHourFormat="AM";
        
    hours = hours % 12 || 12;
    var endTimeNow=hours+":"+minutes+":"+seconds+" "+twelveHourFormat;

    var endInputBox=document.getElementById("txtEndTime");
    var startInputBox=document.getElementById("txtStartTime");
    if(startInputBox.value===""){
        return false;
    }
    endInputBox.value=endTimeNow;
    console.log("end timer:"+endTimeNow);
    var duration=(currentEndTime.getTime()-currentStartTime.getTime())/1000;
    var minutesDiff=Math.floor(duration / 60) % 60;
   
    const secondsDiff = Math.floor(duration  % 60);
    var durationText="Duration => minutes: "+minutesDiff+" seconds: "+secondsDiff;
    console.log(durationText);
    
    //create timer div and append it to the main #container
    var divTimer=document.createElement("div");
    divTimer.className="container-item";
    divTimer.innerText=durationText;

    var mainContainer=document.getElementById("mainContainer");
    mainContainer.parentNode.append(divTimer);

    
});

const resetButton=document.querySelector("#btnReset");
resetButton.addEventListener('click', () => {
    var startInputBox=document.getElementById("txtStartTime");
    startInputBox.value="";
    var endInputBox=document.getElementById("txtEndTime");
    endInputBox.value="";
    document.querySelectorAll('.container-item').forEach(e => e.remove());
    console.log("reset button clicked");
});