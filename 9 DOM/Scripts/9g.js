  let priceEl = document.querySelector("#input");
function calculatePrice(){
  let price = Number(priceEl.value); 
  let para = document.querySelector("#result");

  if(price < 40){
  result.innerText = `Your final Price is: $${((price * 100) + 1000)/100 }`; //1799/100 --> 17.99
  }else{
    result.innerText = `Your final Price is: $${price}`;
  }

}

function displayOnDOM(){
  let para2 = document.querySelector("#result2");
  para2.innerText = `You typed ${priceEl.value}`;
}