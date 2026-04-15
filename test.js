let count = 0;

let intervalId = setInterval(() => {  
  console.log(++count);
},1000);

setTimeout(() => {
  clearInterval(intervalId);
},10000);
