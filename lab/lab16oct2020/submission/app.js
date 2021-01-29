var numSquares = 6;
var colors = [];
var messageDisplay=document.getElementById("message");
var pickedColor;
var squares = document.getElementsByClassName("square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var rgbDisplay=document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton=document.getElementById("reset");
rgbDisplay.innerText="RGB"+pickColor();

var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}


function reset() {  
    //create a new array of 6 random colors  
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    rgbDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
    //fill the squares with new set of generated colors
    for (i=0; i<squares.length; i++) 
    {
        //pick new random color  
        if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
    }
    h1.style.background = "steelblue";
}

function changeColors(color) { 
    for (var i=0; i < squares.length; i++) 
    {  
        squares[i].style.backgroundColor = color;  
        messageDisplay.innerText = "You are good at guessing!"; 
    }
}
function pickColor() {  
    var random = Math.floor(Math.random() * colors.length);  
    return colors[random];
}
function generateRandomColors(num) {
    var arr = [];
    for (i=0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



