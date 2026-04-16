function addToCart(){
 let message =  document.querySelector("#add-message");
 message.innerText = 'Added';

 setTimeout(() => {
  message.innerText = '';
 },2000);
}