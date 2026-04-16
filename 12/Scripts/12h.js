let message = 0;

setInterval(() =>{
  if(message > 0){
    document.title =  document.title === 'App' ? `(${message}) new messages` : 'App';
  }
},1000);

function add(){
  message++;
}

function remove(){
  message--;
}