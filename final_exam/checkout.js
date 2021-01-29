window.addEventListener('load', (event) => {
    console.log('window loaded');
  });
var placeOrderButton    = document.querySelector(".continue-button");
placeOrderButton.addEventListener('click',handleOrderClick);

var CreditCardNumber =document.querySelector("#CreditCardNumber");
var ExpiryMonths =document.querySelector("#ExpiryMonths");
var ExpiryYears =document.querySelector("#ExpiryYears");
var ccv =document.querySelector("#ccv");
var result = document.querySelector("#transactionResult");

function handleOrderClick(){
    console.log("order placed...");
    var customerObj ={};
    customerObj.creditCardNumber= CreditCardNumber.value;
    customerObj.expiryMonth= ExpiryMonths.value;
    customerObj.expiryYear= ExpiryYears.value;
    customerObj.ccv= ccv.value;
    console.log(customerObj);
    processTransaction(customerObj);
}

function processTransaction(customerObj){
    return new Promise((resolve, reject) => {
        var cardNum=customerObj.creditCardNumber;
        if(isCCValid(cardNum)) {
            console.log("transaction successfull");
            result.innerHTML="transaction successfull";
            result.classList.add("transaction-success");
           resolve();
        } else {
            result.innerHTML="transaction failed";
            result.classList.add("transaction-failure");
           reject("Credit Card Number is invalid");
        }
     });
}
const isCCValid = (ccn) => ccn !== null && !Number.isNaN(parseInt(ccn)) && ccn.length > 13;