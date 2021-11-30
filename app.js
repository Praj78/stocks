var initialPrice=document.querySelector("#initial-price");
var stocksQuantity =document.querySelector("#stocks-quantity");
var currentPrice=document.querySelector("#current-price");
var submitBtn =document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click",submitHandler)

function submitHandler() {
    var ip = initialPrice.value;
    var qty= stocksQuantity.value;
    var curr= currentPrice.value;

    calculateProfitAndLoss(ip,qty,curr);
    
}

function calculateProfitAndLoss(initial,quantity,current){
    if(initial>0 && quantity >0 && current >0){
    if(initial >current){
var loss = (initial - current) * quantity;
var lossPercentage = (loss / initial) * 100;
showOutput("hey the loss is "+ loss +" and the percent is "+lossPercentage+"%");
    }else if(current>initial){
var profit = (current - initial) * quantity;
var profitPercentage = (profit / initial) * 100;
showOutput("hey the profit is "+ profit +" and the percent is "+profitPercentage+"%");
    }else{
showOutput("No pain no gain and No gain no pain");
    }
    }
}
function showOutput(message){
    
    outputBox.innerHTML=message;

    
}
