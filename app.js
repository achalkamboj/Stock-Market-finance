var buyingPrice = document.querySelector("#buying-price");
var stocksQuantity = document.querySelector("#no-of-stocks");
var sellingPrice = document.querySelector("#selling-price");
var calculateBtn = document.querySelector("#calculate-button");
var outputDiv = document.querySelector("#output");

function submitHandler(){
    var bp = Number(buyingPrice.value);
    var qty = Number(stocksQuantity.value);
    var sp = Number(sellingPrice.value);

    calculateProfitAndLoss(bp,qty,sp);
}

function calculateProfitAndLoss(buying,quantity,selling){
    if(buying>selling){
        var loss = (buying - selling)*quantity;
        var lossPercentage = (loss/buying)*100;
        outputDiv.innerText = "Your Loss is " + loss + " and loss percentage is " + lossPercentage + "%";
    }
    else if(selling>buying){
        var profit = (selling-buying)*quantity;
        var profitPercentage = (profit/buying)*100;
        outputDiv.innerText ="Your Profit is " + profit + " and profit percentage is " + profitPercentage + "%";
    }
    else{
        outputDiv.innerText="No Profit No Loss"
    }
}

calculateBtn.addEventListener("click",submitHandler)