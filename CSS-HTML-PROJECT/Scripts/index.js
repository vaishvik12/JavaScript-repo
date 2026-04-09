// let button = document.querySelector('.js-test');
// console.log(button.classList.contains('js-test'));


function toggleButton(buttonId){
 let buttonList = document.querySelectorAll(".js-media-button");

 for(let i = 0; i < buttonList.length; i++){
  let button = buttonList[i];
  if(button.classList.contains("active-media-button")){
    button.classList.remove("active-media-button");
  }
  
  let targetButton = document.querySelector(buttonId);
  targetButton.classList.add("active-media-button");
 }
}






// 1) get all three buttons from webpage
// 2) Check if they are active or inactive
// 3) if active then remove 'active-media-button' class
// 4) Active the button that was targted