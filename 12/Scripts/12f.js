let timeoutId = null;
function addToCart(){
 let message =  document.querySelector("#add-message");
 message.innerText = 'Added';

clearInterval(timeoutId);

 timeoutId = setTimeout(() => {
  message.innerText = '';
 },2000);
}

setInterval(() => {
 document.title = document.title === 'App' ?   '(2) New messages' : `App`;
},2000);

// setInterval(() => {
//   let title = '';

//   if(document.title === 'App'){
//     document.title = '(2) new messages'
//   }else{
//     document.title = 'App';
//   }

// },1000);