let subscribeEl = document.querySelector('.js-subscribe');


function subscribed(){
  if(subscribeEl.innerText != "Subscribed"){
  subscribeEl.innerText = "Subscribed";
  subscribeEl.classList.add("js-subscribed");
  }else{
    subscribeEl.innerHTML = "Subscribe";
    subscribeEl.classList.remove("js-subscribed");

  };
};

function calculateShipping(){
  let priceEl = document.querySelector('#js-input');
  let price = Number(priceEl.value);
  let result = document.querySelector("#js-price");
  console.log(typeof price);
  if(price < 40){
    result.innerHTML = `$${price += 10}`;
      
  }else{
    result.innerHTML = `$${price}`;
  }
priceEl.value = ``;
}